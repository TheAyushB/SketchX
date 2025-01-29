"use client"

export function AuthPage({ isLogin }: { isLogin: boolean }) {
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-black">
            <div className="p-8 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 w-full max-w-md">
                <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    {isLogin ? "Welcome Back" : "Create Account"}
                </h2>

                <form className="space-y-6">
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 
                       focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 
                       focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                        />
                    </div>

                    {!isLogin && (
                        <div>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 
                         focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                            />
                        </div>
                    )}

                    <button
                        className="w-full py-3 px-6 rounded-lg font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600
                     hover:scale-[1.02] transition-transform duration-200 shadow-lg hover:shadow-purple-500/20"
                        onClick={(e) => e.preventDefault()}
                    >
                        {isLogin ? "Log In" : "Sign Up"}
                    </button>
                </form>

                <div className="mt-6 text-center text-gray-400">
                    <span className="mr-2">
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                    </span>
                    <a
                        href={isLogin ? "/signup" : "/signin"}
                        className="text-purple-400 hover:text-purple-300 underline transition-colors"
                    >
                        {isLogin ? "Sign Up" : "Log In"}
                    </a>
                </div>

                {isLogin && (
                    <div className="mt-4 text-center">
                        <a
                            href="/forgot-password"
                            className="text-gray-400 hover:text-purple-300 text-sm transition-colors"
                        >
                            Forgot password?
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}