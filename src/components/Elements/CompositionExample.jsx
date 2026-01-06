import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";
import * as React from "react";
import { ThemeContext } from "../../context/themeContext";

function GaugePointer(props) {
  const { color } = props;
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  // --- SAFETY CHECK (PENTING) ---
  // Jika sudut (angle) tidak ketemu atau error (NaN), 
  // jangan paksa menggambar jarum (return null).
  // Ini yang mencegah error merah di console Anda.
  if (valueAngle === null || isNaN(valueAngle) || isNaN(outerRadius)) {
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };

  // Cek lagi apakah koordinat target valid
  if (isNaN(target.x) || isNaN(target.y)) {
    return null;
  }
  // ------------------------------

  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill={color} />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke={color}
        strokeWidth={3}
      />
    </g>
  );
}

export default function CompositionExample(props) {
  const { data } = props;
  const { theme } = React.useContext(ThemeContext);

  // Pastikan data selalu angka. Jika kosong/error, anggap 0.
  const numericData = Number(data) || 0; 

  return (
    <GaugeContainer
      width={150}
      height={80}
      startAngle={-90}
      endAngle={90}
      // Gunakan data yang sudah diamankan
      value={numericData}

    
    >
      <GaugeReferenceArc />
      <GaugeValueArc sx={{ fill: theme.color }} />
      <GaugePointer color={theme.color} />
    </GaugeContainer>
  );
}