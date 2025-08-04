import type React from "react"
import { LoginSidebar } from "@/components/layout/Sidebar"
import { Button } from "@/components/ui/button"
import { SidebarInset, SidebarProvider, SidebarTrigger, useSidebar } from "@/components/ui/sidebar"
import { CircleQuestionMark } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function Login() {
  const [helpSidebar, setHelpSidebar] = useState(false)

  return (
    <>
      <SidebarProvider
        defaultOpen={false}
        style={
          {
            "--sidebar-width": helpSidebar ? `calc(var(--spacing) * 60` : `calc(var(--spacing) * 120`,
            "--header-height": "calc(var(--spacing) * 12)",
          } as React.CSSProperties
        }
      >
        <LoginSidebar />
        <SidebarInset>
          <main>
            <SidebarTrigger
              className="ml-1 size-10 rounded-4xl"
              icon={<CircleQuestionMark className="size-[2em]" size={40} />}
              onClick={(e) => helpSidebar ? setHelpSidebar(false) : setHelpSidebar(true) }
            />
            <div className="flex min-h-svh w-full justify-center p-0">
              <div className="w-full max-w-sm">
                <div className={cn("flex flex-col gap-10")}>
                  {/* <div className="flex gap-4 ">
                
                  </div> */}
                  <div className="flex flex-col items-center">
                    <div className="flex text-amber-200 bg-amber-700 rounded-lg px-3 py-1 gap-0 ">
                      <div className="pb-1 -mt-3 text-5xl font-medium">c</div>
                      <div className="pb-0 mb-1 text-5xl font-medium">c</div>
                    </div>
                    <div className="text-2xl font-bold">CanteenCrowd</div>
                  </div>
                  <Card className="border-4 shadow-[-2px_5px_10px_2px_#7b341e]">
                    {/* transition-all duration-300 hover:-translate-y-2 hover:shadow-lg */}
                    <CardHeader className="text-center mb-3">
                      <CardTitle>Login to your account</CardTitle>
                      <CardDescription>Enter your email below to login to your account</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form>
                        <div className="flex flex-col gap-6">
                          <div className="grid gap-3">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="m@example.com" required />
                          </div>
                          <div className="grid gap-3">
                            <div className="flex items-center">
                              <Label htmlFor="password">Password</Label>
                              <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                                Forgot your password?
                              </a>
                            </div>
                            <Input id="password" type="password" required />
                          </div>
                          <div className="flex flex-col gap-3">
                            <Button type="submit" className="w-full">
                              Login
                            </Button>
                          </div>
                        </div>
                      </form>
                      <div className="mt-4 text-center text-sm">Don&apos;t have an account? </div>
                      <div className="block text-center">
                        <Button variant="link" size="sm" className="py-0">
                          Sign up
                        </Button>
                        <div>or</div>
                        <MockLoginButton />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </>
  )
}

const MockLoginButton = () => {
  const { toggleSidebar } = useSidebar()
  return (
    <Button
      variant="link"
      onClick={() => {
        console.log(toggleSidebar())
      }}
    >
      Login with Mock Logins
    </Button>
  )
}
