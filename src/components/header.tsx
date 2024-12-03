import { LogIn, Menu, Search, Sheet } from "lucide-react";
import { Container } from "./ui/container";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ShoppingBagMenu } from "./shopping-bag";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { title } from "process";
import { MobileMenu } from "./mobile-menu";
import { ListItem } from "./list-item";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function Header() {
  const t = useTranslations();

  return (
    <div className="flex items-center w-full py-2.5 bg-white dark:bg-gray-700">
      <Container className="px-4 md:px-0 relative flex items-center justify-between">
        <h1 className="font-afacad font-black text-primary text-[36px]">
          FLORÉ
        </h1>

        <div className="hidden md:flex items-center ">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  {t("Navigation.catalog.label")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components that you can copy
                            and paste into your apps. Accessible. Customizable.
                            Open Source.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Typography"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  {t("Navigation.delivery.label")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {t("Navigation.offers.label")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {t("Navigation.new_arrivals.label")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <div className="relative z-0 flex flex-1 items-center justify-center ml-4 sm:relative sm:inset-0 ">
                <div className="grid w-full grid-cols-1 sm:max-w-xs">
                  <input
                    name="search"
                    type="search"
                    placeholder={t("Navigation.search")}
                    className="col-start-1 row-start-1 block w-full rounded-3xl bg-gray-100 py-1.5 pl-10 pr-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                  />
                  <Search
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400"
                  />
                </div>
              </div>

              <NavigationMenuItem className="!ml-10">
                <Link href="/sign-up" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {t("Navigation.signup.label")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/sign-in" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle({
                      className:
                        "bg-primary text-white group-hover:text-white group-hover:bg-yellow-500",
                    })}
                  >
                    {t("Navigation.login.label")}
                    <LogIn className="w-4 ml-2 text-white" />
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <ShoppingBagMenu title={t("Cart.your_cart")} />
        </div>

        <div className="block md:hidden">
          <MobileMenu>
            <div className="w-full flex flex-col">
              <h1 className="font-afacad font-black text-white text-center text-[36px]">
                FLORÉ
              </h1>

              <NavigationMenu className="w-full max-w-none mt-10 [&>div]:w-full">
                <NavigationMenuList className="w-full flex flex-col gap-2">
                  <div className="w-full relative z-0 flex flex-1 items-center justify-center  mb-10 sm:relative sm:inset-0 ">
                    <div className="grid w-full grid-cols-1 sm:max-w-xs">
                      <input
                        name="search"
                        type="search"
                        placeholder={t("Navigation.search")}
                        className="col-start-1 row-start-1 block w-full rounded-3xl bg-gray-100 py-1.5 pl-10 pr-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                      />
                      <Search
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400"
                      />
                    </div>
                  </div>

                  <NavigationMenuItem className="w-full [&_a]:w-full [&_button]:w-full">
                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {t("Navigation.catalog.label")}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="w-full [&_a]:w-full [&_button]:w-full">
                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {t("Navigation.delivery.label")}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="w-full [&_a]:w-full [&_button]:w-full">
                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {t("Navigation.offers.label")}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="w-full [&_a]:w-full [&_button]:w-full">
                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {t("Navigation.new_arrivals.label")}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="w-full !mt-20 [&_a]:!w-full w">
                    <Link href="/sign-up" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle({
                          className: "w-full",
                        })}
                      >
                        {t("Navigation.signup.label")}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="w-full [&_a]:w-full [&_button]:w-full">
                    <Link href="/sign-in" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle({
                          className:
                            "bg-yellow-500 text-white group-hover:text-white group-hover:bg-yellow-500",
                        })}
                      >
                        {t("Navigation.login.label")}
                        <LogIn className="w-4 ml-2 text-white" />
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <ShoppingBagMenu title={t("Cart.your_cart")} />
            </div>
          </MobileMenu>
        </div>
      </Container>
    </div>
  );
}
