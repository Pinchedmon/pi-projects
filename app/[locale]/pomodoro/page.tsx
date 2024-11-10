"use client";

import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Pause, Play, Settings, SkipForward } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};

const CircleWithTicks = ({ angle }: any) => {
  const ticks = [];

  for (let tickAngle = 0; tickAngle < 360; tickAngle += 10) {
    const radians = tickAngle * (Math.PI / 180);
    const x1 = Math.floor(80 * Math.cos(radians));
    const y1 = Math.floor(80 * Math.sin(radians));
    const x2 = Math.floor(90 * Math.cos(radians));
    const y2 = Math.floor(90 * Math.sin(radians));

    ticks.push(
      <line
        key={tickAngle}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="black"
        strokeWidth="2"
      />
    );
  }

  return (
    <svg
      className="absolute opacity-40 w-full top-4 left-0 right-0"
      width="300"
      height="300"
      viewBox="-100 -100 200 200"
      style={{
        transform: `rotate(${angle}deg)`,
        transition: "transform 0.5s ease",
      }}
    >
      <circle cx="0" cy="0" r="85" stroke="black" fill="none" />
      {ticks}
    </svg>
  );
};

const RotatingCircle = () => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prevAngle) => (prevAngle + 10) % 360);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <CircleWithTicks angle={angle} />;
};

export default function PomodoroPage() {
  const t = useTranslations("HomePage");
  const [on, setOn] = useState(false);
  return (
    <div className="w-full p-4 ">
      <div className="flex w gap-4">
        <Card className=" max-w-[300px] w-full relative bg-white shadow-md rounded-lg overflow-hidden">
          <CardHeader>
            <CardTitle className="text-center font-bold relative text-2xl">
              🍅
              <p className="absolute left-1/2 transform -translate-x-1/2 -top-4 text-sm text-gray-600">
                {on ? "Работа" : "Долгий перерыв"}
              </p>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center relative">
            <div className="text-3xl font-bold z-10">
              {formatTime(30 * 60)} <RotatingCircle />
            </div>
          </CardContent>
          <CardFooter className="z-10 flex justify-center relative space-x-4">
            <Button className="w-10 h-10" onClick={() => setOn(!on)}>
              {on ? <Pause /> : <Play />}
            </Button>
            <Button className="w-10 h-10">
              <SkipForward />
            </Button>
          </CardFooter>
        </Card>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant={"outline"} className="w-10 h-10">
              <Settings />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <Label className="font-bold text-lg">Настройки</Label>

            <div className=" max-w-[400px] flex flex-col gap-4 p-2 justify-center">
              <div className="grid grid-cols-2 text-sm flex-col gap-4">
                <div className="flex items-center gap-2">Помодоро:</div>
                <Input />
                <div className="flex items-center ">Длинный перерыв:</div>
                <Input />
                <div className="flex items-center g">Краткий перерыв:</div>
                <Input />
              </div>

              <div className="w-full flex items-center space-x-2">
                <label
                  htmlFor="tem1"
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Автоматически начинать перерыв
                </label>
                <Checkbox id="tem1" />
              </div>
              <div className="w-full flex items-center space-x-2">
                <label
                  htmlFor="tem2"
                  className="text-sm  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Автоматически начинать помодоро
                </label>
                <Checkbox id="tem2" />
              </div>
              <div className="flex  items-center gap-4">
                <div className="flex w-full   text-sm items-center ">
                  Интервал длинных перерывов:
                </div>
                <Input />
              </div>
            </div>
            <Button className="w-full mt-2">Сохранить</Button>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
