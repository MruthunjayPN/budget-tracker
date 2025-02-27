"use client"
import React , {useState} from 'react'
import Logo, { LogoMobile } from './Logo'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button, buttonVariants } from './ui/button'
import { Divide, Menu } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
import { ThemeSwitcherButton } from './ThemeSwitcherButton'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

const Navbar = () => {
  return (
    <>
        <DesktopNavbar />
        <MobileNavbar />
    </>
  )
}

const items = [
    {label: "Dashboard" , link:'/'},
    {label: "Transctions" , link:'/transctions'},
    {label: "Manage" , link:'/manage'}
]

function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="block border-separate bg-background md:hidden">
            <nav className="container flex items-center justify-between px-8">
                <Sheet open={isOpen} onOpenChange={setIsOpen} >
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu />
                        </Button>  
                    </SheetTrigger>
                    <SheetContent className='w-[400px] sm:w-[540px] ' side='left'>
                        <Logo />
                        <div className="flex flex-col gap-2 pt-4">
                            {items.map(item => (
                                <NavItem key = {item.label} label={item.label} link={item.link} onClick={()=>  setIsOpen((prev) => !prev)}/>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
                <div>
                    <LogoMobile />
                </div>
                <div className="flex h-[80px] min-h-[60px] items-center justify-end gap-x-4 ">
                    <div className="flex items-center gap-2">
                        <ThemeSwitcherButton />
                        <UserButton afterSwitchSessionUrl ='/sign-in'/>
                    </div>
                </div>
            </nav>
        </div>
    )
}

function DesktopNavbar() {
    return (
        <div className="hidden border-separate border-b bg-background md:block">
            <nav className="container flex items-center justify-between px-8">
                <div className="flex h-[80px] min-h-[60px] items-center gap-x-4">
                    <Logo />
                    <div className="flex h-full">
                        {items.map(item => (
                            <NavItem key = {item.label} label={item.label} link={item.link} />
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <ThemeSwitcherButton />
                    <UserButton  afterSwitchSessionUrl='/sign-in'/>
                </div>
            </nav>
        </div>
    )
}

function NavItem({label, link, onClick} : {label: string, link: string, onClick?: () => void}) {
    const pathName = usePathname();
    const isActive = pathName === link;
    return (
        <div className="relative flex items-center ">
            <Link href={link} onClick={onClick} className={cn(buttonVariants({variant: "ghost"}),
        "w-full justify-start text-lg text-muted-foreground hover:text-foreground", isActive && "text-foreground")}>
                {label}
            </Link>
            {
                isActive && (<div className='absolute -bottom-[2px] left-1/2 hidden h-[2px] w-[80%]  -translate-x-1/2 rounded-xl bg-foreground md:block'></div>)
            }
        </div>
    )}
export default Navbar