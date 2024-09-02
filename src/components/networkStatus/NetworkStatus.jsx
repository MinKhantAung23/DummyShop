/* eslint-disable no-unused-vars */
import { Alert } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { HiInformationCircle } from "react-icons/hi";

const NetworkStatus = () => {
  const [isOffline, setIsOffline] = useState(false);
  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    window.addEventListener("online", () => {
      handleOnline();
    });
    window.addEventListener("offline", () => {
      handleOffline();
    });

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);
  return (
    <div>
      {isOffline && (
        <Alert
          color="failure"
          icon={HiInformationCircle}
          className="w-fit absolute shadow-md top-24 right-0 left-0 mx-auto z-50"
        >
          <span className="font-medium">alert!</span> You are offline now
        </Alert>
      )}
    </div>
  );
};

export default NetworkStatus;
