import { Button, Label, TextInput } from "flowbite-react"
import { Link } from "react-router-dom"

export default function SignIn() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left side */}
        <div className="flex-1">

          <Link to="/">
            <img className="rounded-full w-96 h-96  mx-auto" src="/image/logo.png" alt="logo.png" />
          </Link>
          <p className="text-sm mt-5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eveniet numquam repellat. Voluptates inventore sed error in excepturi sit quo, ex, voluptatem ipsum ad, dignissimos libero placeat itaque laborum doloremque.
          </p>
        </div>


        {/* righ side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Username" />
              <TextInput
                type="text"
                placeholder="username"
                id="username" />
            </div>
            <div>
              <Label value="Email" />
              <TextInput
                type="text"
                placeholder="email@company.com"
                id="email" />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                type="text"
                placeholder="password"
                id="password" />
            </div>
            <Button outline gradientDuoTone='redToYellow' type="submit">
              Sgin Up
            </Button>
          </form>

          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to='/sign-in' className="text-blue-500"> 
              Sgin In
            </Link>
          </div>
        </div>
      </div>


    </div>
  )
}
