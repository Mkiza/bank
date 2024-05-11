import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /*$id: string;
  email: string;
  userId: string;
  dwollaCustomerUrl: string;
  dwollaCustomerId: string;
  firstName: string;
  lastName: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  dateOfBirth: string;
  ssn: string;
*/
  const loggedIn = {
    firstName: "Ronald",
    lastName: "Bagenda",
    email: "test@gmail.com",
    $id: "1",
    userId: "1",
    dwollaCustomerUrl: "1",
    dwollaCustomerId: "1",
    address1: "1",
    city: "1",
    state: "1",
    postalCode: "1",
    dateOfBirth: "1",
    ssn: "1",
    name: "Ronald Bagenda", // Add the 'name' property
  };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image
            width={30}
            height={30}
            alt="menu icon"
            src={"/icons/logo.svg"}
          />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
