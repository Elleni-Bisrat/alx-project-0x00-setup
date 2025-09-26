import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <div className="mt-6 flex gap-4 flex-wrap">
        <Button title="Small Rounded" styles="text-sm rounded-sm" />
        <Button title="Small Medium" styles="text-sm rounded-md" />
        <Button title="Small Full" styles="text-sm rounded-full" />
      </div>
    </div>
  );
};
export default Landing;
