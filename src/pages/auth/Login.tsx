import type React from "react"
import { useState } from "react"
import {} from "react-router"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { useSidebar } from "@/components/ui/sidebar"

export const LoginButton = ({ updateSidebar, ...props }) => {
  const { toggleSidebar } = useSidebar()
  return (
    <Button
      variant="default"
      onClick={() => {
        updateSidebar()
        toggleSidebar()
      }}
      {...props}
    >
      Login
    </Button>
  )
}

export function Login() {
  return (
    <>
      <div className="flex min-h-svh w-full justify-center p-0">
        <div className="w-full max-w-sm">
          <div className={cn("flex flex-col gap-10")}>
            {/* <Card className="border-4 shadow-[-2px_5px_10px_2px_#7b341e]"> */}
            {/* transition-all duration-300 hover:-translate-y-2 hover:shadow-lg */}
            <CardHeader className="text-center mb-3">
              <CardTitle>Login to your account</CardTitle>
              <CardDescription className="text-secondary">Enter your email below to login to your account</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" required className="bg-background text-foreground" />
                  </div>
                  <div className="grid gap-3">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                      <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                        Forgot your password?
                      </a>
                    </div>
                    <Input id="password" type="password" required className="bg-background text-foreground" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button type="submit" variant="outline" className="w-full bg-primary border-secondary">
                      Login
                    </Button>
                  </div>
                  <div className="text-center">
                    By continuing, you agree to our{" "}
                    <a href="#" className="underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="underline">
                      Privacy Policy
                    </a>
                    .
                  </div>
                </div>
              </form>
            </CardContent>
            {/* </Card> */}
          </div>
        </div>
      </div>
    </>
  )
}
