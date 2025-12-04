import React from 'react';
import LabeledInput from '../Elements/LabeledInput';
import Button from '../Elements/Button';
// TAMBAHKAN IMPORT INI
import { Link } from 'react-router-dom';

const FormSignUp = () => {
  return (
    <>
      {/* Judul Form */}
      <div className="text-center mb-8">
        <h1 className="text-xl font-bold text-gray-900">Create an Account</h1>
        <p className="text-gray-500 text-sm">Enter your details to sign up</p>
      </div>

      <form action="">
        <div className="mb-6">
          <LabeledInput 
            label="Name"
            type="text"
            placeholder="John Doe"
            name="name"
          />
        </div>
        <div className="mb-6">
          <LabeledInput 
            label="Email Address"
            type="email"
            placeholder="hello@example.com"
            name="email"
          />
        </div>
        <div className="mb-6">
          <LabeledInput 
            label="Password"
            type="password"
            placeholder="*************"
            name="password"
          />
        </div>
        
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </form>

      {/* Pembatas */}
      <div className="my-9 px-7 flex flex-col justify-center items-center text-xs text-gray-03">
          <div className="border border-gray-05 w-full"></div>
          <div className="px-2 bg-special-mainBg absolute"> or sign up with</div>
      </div>

      {/* Tombol Google */}
      <div className="mb-8">
        <Button type="button" variant="secondary">
          <span className="flex items-center justify-center">
             <span className="mr-2 font-bold text-lg">G</span> 
             Continue with Google
          </span>
        </Button>
      </div>

      {/* Link Login */}
      <div className="flex justify-center text-sm">
          <span className="text-gray-500 mr-1">Already have an account?</span>
          {/* PERBAIKAN: Ganti 'link' jadi 'Link' */}
          <Link to="/login" className="text-primary font-bold cursor-pointer">Sign in here</Link>
      </div>
    </>
  );
};

export default FormSignUp;