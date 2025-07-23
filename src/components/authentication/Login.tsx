'use client';

import { X } from 'lucide-react';
import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm,SubmitHandler } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from '../ui/checkbox';
import Link from 'next/link';
import google from '@/assets/auth/google.png'
import facebook from '@/assets/auth/facebook.png'
import Image from 'next/image';

// Login component start here 
export default function Login() {
  const [isOpen, setIsOpen] = useState(false);
const formSchema = z.object({
  email: z.string(),
  password:z.string(),
  remember:z.string()
})
type TFormValue  = z.infer<typeof formSchema>;
const form = useForm<TFormValue>({
    resolver:zodResolver(formSchema),
    defaultValues:{
        email:"",
        password:"",
        remember:"",
    }
})

const onSubmit:SubmitHandler<TFormValue>=(data)=>{
    console.log(data)
}
  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="block "
      >
        Sign in
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Modal Box */}
          <div className="text-gray-900 bg-white opacity-100 border border-gray-100 rounded-xs shadow-sm shadow-gray-500 max-w-md px-4 py-4">
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
                <h1></h1>
              <h3 className="text-2xl font-semibold text-gray-900 text-center h-2 my-4">
                Login
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="-mt-4 text-gray-600 font-light"
                aria-label="Close modal"
              >
                <X size={20}/>
              </button>
            </div>

            {/* form */}
              <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className='my-4'>
              <FormLabel className='text-gray-900 font-light'>Email</FormLabel>
              <FormControl>
                <Input className='h-11 w-52 md:w-64 lg:w-72' placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className='my-4'>
              <FormLabel className='text-gray-900 font-light'>password</FormLabel>
              <FormControl>
                <Input className='h-11 w-52 md:w-64 lg:w-72' placeholder="Enter your password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex justify-between items-center'>
            <FormField
          control={form.control}
          name="remember"
          render={({ field }) => (
            <FormItem className='flex items-center my-0'>
              <FormControl>
                <Checkbox  className={`border border-[#ff6a19] data-[state=checked]:bg-gray-50 data-[state=checked]:text-[#ff6a19] data-[state=checked]:border-[#ff6a19]`} {...field}
                checked={field.value==="true"}
                onCheckedChange={(checked)=>field.onChange(checked?"true":"false")}

                 /> 
              </FormControl>
              <span className='text-gray-900 text-[10px] font-normal'>Remember me</span>
              <FormMessage />
            </FormItem>
          )}
        />
        <Link className='text-gray-900 text-xs underline decoration-gray-700 decoration-dotted' href='/forgot-password'>Forgot Password</Link>
        </div>
        
        <button className='rounded-sm h-10 w-full bg-[#ff6a19] cursor-pointer text-gray-50 font-medium' type="submit">Login</button>
      </form>
    </Form>
          <p className='text-[12px] text-center my-4'>Or sign in with with</p>
          {/* google signin  */}
          <div className='text-center'>
            <Button className='mr-3 bg-gray-100 shadow-md text-gray-900 border border-gray-200'><Image src={google} alt='google logo' width={15} height={15}/> Google</Button>
            <Button className='mr-3 bg-gray-100 shadow-md text-gray-900 border border-gray-200'><Image src={facebook} alt='google logo' width={15} height={15}/> Facebook</Button>
            <p className='text-[12px] mt-8 mb-3'>Dont have an account? <span className='text-[#ff6a19]'>Sign up</span></p>
          </div>
          </div>
        </div>
      )}
    </>
  );
}
