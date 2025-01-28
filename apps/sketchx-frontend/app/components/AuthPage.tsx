"use client"

export function AuthPage({ isSignin }: {
    isSignin: boolean
}) {
    return <div className="w-screen h-screen flex justify-center items-center">
        <div className="p-2 m-2 bg-white rounded">
            <div className="m-5">
                <input type="email" placeholder="Email"></input>
                <br />
                <br />
            </div>
            <div className="m-5 ">
                <input type="password" placeholder="Password" />
                <br />
                <br />
            </div>

            <div className="m-5">
                <button onClick={() => {
                }}>{isSignin ? "Sign in" : "Sign up"}</button>
            </div>

        </div>
    </div>
}