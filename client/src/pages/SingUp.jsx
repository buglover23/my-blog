import { Alert, Button, Label,Spinner, TextInput } from "flowbite-react"
import { useState} from "react";
import { Link, useNavigate } from "react-router-dom"
import OAuth from "../components/OAuth";


export default function SingUp() {

  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
 const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() })
  }


  const handleSubmit = async (e) => {
    // prevent update the page when submit button is click 
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields.');
    }

    // this is submit application for submit
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok) {
        navigate('/sign-in');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  }
  return (

    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left side */}
        <div className="flex-1">

          <Link to="/">
            <img className="rounded-full w-64 h-64  mx-auto" src="/image/logo.png" alt="logo.png" />
          </Link>
          <p className="text-sm mt-5 text-center">
            {`Shun's`} blog へようこそこのページは自己学習、最新の情報や自分の課題を目的として作りました、自己満ブログです。ぜひ、登録お願い致します。＊メルマガや迷惑メールなどはありませんのでご安心してください。
          </p>
        </div>

        {/* righ side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Username" />
              <TextInput
                type="text"
                placeholder="username"
                id="username" onChange={handleChange} />
            </div>
            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="email@company.com"
                id="email" onChange={handleChange} />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="password"
                id="password" onChange={handleChange} />
            </div>
            <Button outline gradientDuoTone='redToYellow' type="submit">
            {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign Up'
              )}
            </Button>
            <OAuth/>
          </form>
         
          <div className="flex gap-2 text-sm mt-5">
            <strong>Have an account?</strong>
            <Link to='/sign-in' className="text-blue-500">
              Sign In
            </Link>
          </div>
          {
            errorMessage && (
              <Alert className="mt-5" color='failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>


    </div>
  )
}
