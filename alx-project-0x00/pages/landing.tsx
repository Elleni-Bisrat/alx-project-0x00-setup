import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <div className="mt-6 flex gap-4 flex-wrap">
         <Button title="Small Button" styles="rounded-sm" />
      <Button title="Medium Button" styles="rounded-md" />
      <Button title="Full Button" styles="rounded-full" />
      <Button title="Large Rounded" styles="rounded-lg" />
      </div>
    </div>
  );
};
export default Landing;
