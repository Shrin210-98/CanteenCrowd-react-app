import type React from "react"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import {} from "react-router"
import { AuthSidebar } from "@/components/layout/Sidebar"
import { Button } from "@/components/ui/button"
import { SidebarInset, SidebarProvider, SidebarTrigger, useSidebar } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  ArrowDown,
  ArrowDownCircle,
  ArrowLeft,
  ArrowRight,
  ArrowUpCircle,
  CircleQuestionMark,
  HistoryIcon,
  KeyIcon,
  MonitorSmartphoneIcon,
  ServerIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Login, LoginButton } from "./Login"
import { useIsMobile } from "@/hooks/use-mobile"

type AuthSidebarState = {
  open: boolean
  type: "help" | "demo-access" | "login" | "forget-pwd"
  side: "left" | "right"
}

export default function Auth() {
  const isMobile = useIsMobile()
  const [sidebar, setSidebar] = useState<AuthSidebarState>({ open: false, type: "help", side: "left" })
  const [sidebarToOpen, setSidebarToOpen] = useState<AuthSidebarState>(null)
  const [whyButton, setWhyButton] = useState(false)
  const [loginCreds, setLoginCreds] = useState({ email: "", password: "" })

  useLayoutEffect(() => {
    let timeoutId: NodeJS.Timeout
    if (sidebarToOpen?.open) {
      timeoutId = setTimeout(() => {
        setSidebar(sidebarToOpen)
        setSidebarToOpen(null)
      }, 100)
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [sidebarToOpen])

  const handleUpdateSidebar = (sType: AuthSidebarState["type"]) => {
    const newSide = sidebarConfigs[sType].side as AuthSidebarState["side"]
    setWhyButton(false)
    if (sidebar.open) {
      setSidebar({ open: false, type: sType, side: newSide })
      if (sidebar.type != sType) {
        setSidebarToOpen({ open: true, type: sType, side: newSide })
      }
    } else {
      setSidebar({ open: true, type: sType, side: newSide })
    }
  }

  const handleDemoClick = (values) => {
    handleUpdateSidebar("login")
    setLoginCreds(values)
  }

  const sidebarConfigs = {
    ["help"]: { side: "left", width: `calc(var(--spacing) * 100`, content: <HelpContent /> },
    ["demo-access"]: { side: "left", width: `calc(var(--spacing) * 120`, content: <DemoAccessContent onClick={handleDemoClick} /> },
    ["login"]: { side: "right", width: `calc(var(--spacing) * 180`, content: <Login /> },
    ["forget-pwd"]: { side: "right", width: `calc(var(--spacing) * 120`, content: <></> },
  }

  return (
    <>
      <SidebarProvider
        open={sidebar.open}
        style={
          {
            "--sidebar-width": sidebarConfigs[sidebar.type]?.width,
            "--header-height": "calc(var(--spacing) * 12)",
          } as React.CSSProperties
        }
      >
        <div
          data-slot="sidebar"
          data-side={sidebar.side}
          data-variant="inset"
          data-state="collapsed"
          data-collapsible="icon"
          className={cn("group peer text-sidebar-foreground hidden md:block", sidebar.open ? "expanded" : "")}
        />
        <div className={sidebar.side == "left" ? "" : "hidden"}>
          <AuthSidebar side="left" content={sidebarConfigs[sidebar.type]?.content} />
        </div>
        <SidebarInset>
          <main className="relative">
            <SidebarTrigger
              className="mt-1 ml-1 size-10 rounded-4xl"
              icon={<CircleQuestionMark className="size-[2em]" size={40} />}
              onClick={() => (sidebar.open ? setSidebar({ ...sidebar, open: false }) : setSidebar({ open: true, type: "help", side: "left" }))}
            />
            <SidebarTrigger
              className={cn("absolute z-10 mt-1 ml-1 size-10 rounded-xl bg-amber-700 text-secondary border-2", {
                "hidden ": sidebar.open == false,
                "top-4/12 -right-4": sidebar.side == "right",
                "top-4/12 -left-5": sidebar.side == "left",
              })}
              icon={sidebar.side == "right" ? <ArrowRight className="size-[2em]" size={40} /> : <ArrowLeft className="size-[2em]" size={40} />}
              onClick={() => (sidebar.open ? setSidebar({ ...sidebar, open: false }) : setSidebar({ open: true, type: "help", side: "left" }))}
            />
            <div className="flex min-h-svh w-full justify-center p-0">
              <div className={cn("w-full", whyButton ? "max-w-3xl" : "max-w-lg")}>
                <div className={cn("flex flex-col gap-10")}>
                  {/* <div className="flex gap-4 "></div> */}
                  <div>
                    <div className="flex flex-col items-center">
                      <div className="flex text-amber-200 bg-amber-700 rounded-lg px-3 py-1 gap-0 ">
                        <div className="pb-1 -mt-3 text-5xl font-medium">c</div>
                        <div className="pb-0 mb-1 text-5xl font-medium">c</div>
                      </div>
                      <div className="text-2xl font-bold">CanteenCrowd</div>
                    </div>
                    <p className="text-center text-lg text-amber-700">Where ERP Meets the Heartbeat of Your Workplace!</p>
                  </div>
                  <Card className="border-2 shadow-[-2px_5px_10px_2px_#7b341e] py-1 mb-10">
                    {/* transition-all duration-300 hover:-translate-y-2 hover:shadow-lg */}
                    {/* <CardHeader className="text-center mb-3">
                      <CardTitle>Login to your account</CardTitle>
                      <CardDescription>Enter your email below to login to your account</CardDescription>
                    </CardHeader> */}
                    {/* <CardContent> */}
                    {/* Action Buttons at Top */}
                    <div className="flex flex-col gap-4 mb-0">
                      <div className="p-6 sm:p-8 flex flex-col">
                        <LoginButton
                          updateSidebar={() => handleUpdateSidebar("login")}
                          className="w-full py-6 text-lg font-bold rounded-full bg-amber-600 hover:bg-amber-700 text-white transition-all transform hover:scale-[1.02]"
                        />
                        <div className="relative my-2">
                          <Separator className="my-4" />
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background px-4 text-sm text-muted-foreground">
                            OR
                          </div>
                        </div>{" "}
                        <DemoAccessButton
                          updateSidebar={() => handleUpdateSidebar("demo-access")}
                          className="w-full py-6 text-md font-bold rounded-full border-2 border-amber-600 text-amber-600  transition-all transform hover:scale-[1.02]"
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="py-0 px-2 sm:px-2 lg:px-4">
                        {/* <!-- Main content card --> */}
                        {/* <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all hover:shadow-2xl"> */}
                        <div className="sm:px-5">
                          <div className="flex items-start mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 flex item-center">
                              <div className="text-center">
                                Why <span className="text-amber-600">CanteenCrowd</span> when it's just another ERP system?
                              </div>
                              <Button
                                variant="link"
                                onClick={() => {
                                  setWhyButton(!whyButton)
                                  if (sidebar.open) handleUpdateSidebar(sidebar.type)
                                }}
                              >
                                {!whyButton ? <ArrowDownCircle className="size-[2.2em]" /> : <ArrowUpCircle className="size-[2.2em]" />}
                              </Button>
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`mx-10 transition-all duration-400 ease-in overflow-hidden ${whyButton ? "max-h-[1000px]" : "max-h-0"}`}
                        style={{ transitionProperty: "max-height, opacity" }}
                      >
                        <div className="prose prose-lg  text-gray-800 max-w-none">
                          <p className="my-2 text-lg  text-gray-800">
                            Well, who doesn't love food? <span className="text-2xl">🍽️</span>
                          </p>
                          <p>
                            At its core, CanteenCrowd <em>does</em> handle the essentials—employees, invoices, inventory, and payments—but with a{" "}
                            <strong className="text-amber-600">flavorful twist</strong>. Because let's be honest:{" "}
                            <strong>no resource is as critical to productivity as a well-fed team.</strong>
                          </p>

                          <div className="my-8 p-6 bg-amber-50 rounded-lg border-l-4 border-amber-400">
                            <p className="font-medium text-amber-800">
                              "Imagine an ERP that doesn't just track payroll but also what's on the lunch menu. A system where HR manages
                              designations <em>and</em> dinner preferences. Where finance approves supplier payments <em>and</em> coffee budgets."
                            </p>
                          </div>

                          <p className="text-xl font-medium mt-8 text-gray-800">
                            This isn't just <em>resource</em> planning—it's <span className="text-amber-600 font-bold">happiness planning</span>.
                            Because a team that eats together, works better together.
                          </p>
                        </div>

                        {/* <!-- CTA Button --> */}
                        <div className="mt-10 text-center">
                          <button
                            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-sm text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all transform hover:scale-105"
                            onClick={() => {
                              window.scroll({ top: 0, behavior: "smooth" })
                              setWhyButton(false)
                            }}
                          >
                            <svg className="-ml-1 mr-3 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                              ></path>
                            </svg>
                            Hungry for efficiency? Dive in 🚀
                          </button>
                        </div>

                        {/* <!-- Food icons decoration --> */}
                        <div className="flex justify-center space-x-8 my-12 opacity-30">
                          <span className="text-3xl">🍔</span>
                          <span className="text-3xl">🍕</span>
                          <span className="text-3xl">🥗</span>
                          <span className="text-3xl">☕</span>
                          <span className="text-3xl">🍰</span>
                        </div>
                      </div>
                    </div>
                    {/* </div> */}
                    {/* <div className="mt-4 text-center text-sm">Don&apos;t have an account? </div>
                      <div className="block text-center">
                        <Button variant="link" size="sm" className="py-0">
                          Sign up
                        </Button>
                        <div>or</div>
                      </div> */}
                    {/* </CardContent> */}
                  </Card>
                </div>
              </div>
            </div>
          </main>
        </SidebarInset>
        <div className={sidebar.side == "right" ? "" : "hidden"}>
          <AuthSidebar side={!sidebar.open ? "left" : "right"} content={sidebarConfigs[sidebar.type]?.content} />
        </div>
      </SidebarProvider>
    </>
  )
}

const DemoAccessButton = ({ updateSidebar, ...props }) => {
  const { toggleSidebar } = useSidebar()
  return (
    <Button
      variant="outline"
      onClick={() => {
        updateSidebar()
        toggleSidebar()
      }}
      {...props}
    >
      Login with Demo Access Credentials for Trial
    </Button>
  )
}

const DemoAccessContent = (props) => {
  return (
    <div className="grid gap-4 py-4 transition-opacity duration-100 opacity-100">
      <div>
        <div className="text-lg font-medium">Demo Access Credentials</div>
        <div className="text-sm">Use these test accounts to explore different permission levels</div>
      </div>
      {[
        { title: "System Administrator", icon: <ShieldCheckIcon />, email: "admin@demo.com", password: "Demo@1234" },
        { title: "Department Manager", icon: <UsersIcon />, email: "manager@demo.com", password: "Demo@1234" },
        { title: "Staff Member", icon: <UserIcon />, email: "staff@demo.com", password: "Demo@1234" },
      ].map((i) => (
        <div key={i.title} className="rounded-lg border p-4">
          <h3 className="font-medium text-lg flex items-center gap-2">
            {i.icon}
            {i.title}
            <Button
              variant="secondary"
              size="sm"
              className="text-xs py-1.5  h-auto leading-none"
              onClick={() => props.onClick({ email: i.email, password: i.password })}
            >
              Try Demo
            </Button>
          </h3>
          <div className="mt-2 space-y-1 text-sm">
            <div className="flex items-center gap-2">
              <UserIcon className="opacity-60" size={14} />
              <span>
                Email: <span className="font-mono">{i.email}</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <KeyIcon className="opacity-60" size={14} />
              <span>
                Password: <span className="font-mono">{i.password}</span>
              </span>
            </div>
          </div>
          <p className="mt-2 text-xs">Full system access including user management and settings</p>
        </div>
      ))}
    </div>
  )
}

const HelpContent = () => {
  return (
    <div className="space-y-4 p-4">
      <div className="">
        <h3 className="font-medium flex items-center gap-2 text-lg my-5">
          <SparklesIcon className="text-yellow-500" />
          Technical Stack
        </h3>
        <div className="mt-3 space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <p className="font-medium flex items-center gap-2">
                <MonitorSmartphoneIcon size={16} />
                Frontend
              </p>
              <ul className="mt-1 ml-6 list-disc space-y-1">
                <li>React 19 (Latest)</li>
                <li>Tailwind CSS v4</li>
                <li>Modern UI/UX Principles</li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="font-medium flex items-center gap-2">
                <ServerIcon size={16} />
                Backend
              </p>
              <ul className="mt-1 ml-6 list-disc space-y-1">
                <li>Golang API</li>
                <li>Robust Architecture</li>
                <li>Minimal & Efficient</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border px-7 pt-30">
        <h3 className="font-medium flex items-center gap-2">
          <HistoryIcon size={16} />
          Project History
        </h3>
        <p className="mt-2 text-sm">Complete rewrite of my legacy personal project with modern technologies and improved architecture</p>
      </div>
    </div>
  )
}
