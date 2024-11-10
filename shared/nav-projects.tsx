"use client";

import * as React from "react";
import { LayoutGrid, Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ModeToggle } from "@/components/mode-toggle";
import { useTranslations } from "next-intl";

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];

export function NavProject() {
  const t = useTranslations("NavProjects");

  return (
    <Drawer>
      <DrawerTrigger asChild className="block md:hidden w-12 h-12">
        <Button variant="outline">
          <LayoutGrid />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Menu</DrawerTitle>
            <DrawerDescription>Projects</DrawerDescription>
          </DrawerHeader>
          <div className=" grid grid-cols-4 gap-6 justify-items-center">
            <ModeToggle />
            <ModeToggle />
            <ModeToggle />
            <ModeToggle />
            <ModeToggle />
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button>{t("leave")}</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
