import { Calendar, ChevronRightIcon, Ellipsis, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"

// Menu items.
export const items = [
  { title: "Dashboard", url: "#", icon: Home },
  {
    title: "Employees",
    url: "#",
    icon: Inbox,
    menuItems: [
      { title: "Employees", url: "#" },
      { title: "Departments", url: "#" },
      { title: "Positions", url: "#" },
    ],
  },
  { title: "Chat", url: "#", icon: Inbox },
  { title: "Calendar", url: "#", icon: Calendar },
  { title: "Search", url: "#", icon: Search },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
    collapsible: {
      isActive: true,
      items: [
        { title: "Change Password", url: "#" },
        { title: "Firewall", url: "#" },
        { title: "FAQs", url: "#" },
      ],
    },
  },
]

export function AppSidebar() {
  const { isMobile } = useSidebar()
  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              // asChild
              className="data-[slot=sidebar-menu-button]:!p-0.5 active:text-amber-200 active:bg-transparent hover:bg-transparent hover:text-amber-200"
              // disabled
            >
              <div className="flex gap-4 ">
                {/* <IconInnerShadowTop className="!size-5" /> */}
                <div className="flex bg-amber-200 text-amber-700 rounded-lg pl-1 pr-1.5 gap-0 ">
                  <div className="pb-1 mt-[-5px] text-xl font-bold">c</div>
                  <div className="pb-0 mb-[-5px] text-xl font-bold">c</div>
                </div>
                <span className="text-lg font-bold">CanteenCrowd</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) =>
                item.collapsible ? (
                  <Collapsible key={item.title} asChild defaultOpen={item.collapsible.isActive} className="group/collapsible">
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton tooltip={item.title}>
                          {item.icon && <item.icon />}
                          <span className="font-medium">{item.title}</span>
                          <ChevronRightIcon className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-270" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="overflow-hidden transition-all duration-300 ease-in-out data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                        <SidebarMenuSub>
                          {item.collapsible.items?.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild>
                                <a href={subItem.url}>
                                  <span className="font-medium">{subItem.title}</span>
                                </a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon size={"48"} />
                        <span className="font-medium">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                    {item.menuItems?.length > 0 && (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <SidebarMenuAction
                            // showOnHover
                            className="data-[state=open]:bg-accent rounded-sm"
                          >
                            <Ellipsis />
                            <span className="sr-only">More</span>
                          </SidebarMenuAction>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          className="w-24 rounded-lg bg-amber-700 text-amber-200 p-0.5"
                          side={isMobile ? "bottom" : "right"}
                          align={isMobile ? "end" : "start"}
                        >
                          <div className="border-3 border-amber-200 rounded-lg">
                          {item.menuItems?.map((item) => (
                            <DropdownMenuItem>
                              {/* <IconFolder /> */}
                              <span className="">{item.title}</span>
                            </DropdownMenuItem>
                          ))}
                          </div>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}


export function LoginSidebar() {
  const { isMobile } = useSidebar()
  return (
    <Sidebar variant="inset" collapsible="offcanvas">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              // asChild
              className="data-[slot=sidebar-menu-button]:!p-0.5 active:text-amber-200 active:bg-transparent hover:bg-transparent hover:text-amber-200"
              // disabled
            >
              <div className="flex gap-4 ">
                {/* <IconInnerShadowTop className="!size-5" /> */}
                <div className="flex bg-amber-200 text-amber-700 rounded-lg pl-1 pr-1.5 gap-0 ">
                  <div className="pb-1 mt-[-5px] text-xl font-bold">c</div>
                  <div className="pb-0 mb-[-5px] text-xl font-bold">c</div>
                </div>
                <span className="text-lg font-bold">CanteenCrowd</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) =>
                item.collapsible ? (
                  <Collapsible key={item.title} asChild defaultOpen={item.collapsible.isActive} className="group/collapsible">
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton tooltip={item.title}>
                          {item.icon && <item.icon />}
                          <span className="font-medium">{item.title}</span>
                          <ChevronRightIcon className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-270" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="overflow-hidden transition-all duration-300 ease-in-out data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                        <SidebarMenuSub>
                          {item.collapsible.items?.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild>
                                <a href={subItem.url}>
                                  <span className="font-medium">{subItem.title}</span>
                                </a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon size={"48"} />
                        <span className="font-medium">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                    {item.menuItems?.length > 0 && (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <SidebarMenuAction
                            // showOnHover
                            className="data-[state=open]:bg-accent rounded-sm"
                          >
                            <Ellipsis />
                            <span className="sr-only">More</span>
                          </SidebarMenuAction>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          className="w-24 rounded-lg bg-amber-700 text-amber-200 p-0.5"
                          side={isMobile ? "bottom" : "right"}
                          align={isMobile ? "end" : "start"}
                        >
                          <div className="border-3 border-amber-200 rounded-lg">
                          {item.menuItems?.map((item) => (
                            <DropdownMenuItem>
                              {/* <IconFolder /> */}
                              <span className="">{item.title}</span>
                            </DropdownMenuItem>
                          ))}
                          </div>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
