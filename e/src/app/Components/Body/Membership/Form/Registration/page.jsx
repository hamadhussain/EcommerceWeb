import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const Page = () => {
  return (
    <div>
    <div className="flex justify-center py-10">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Fill form to Rejister to your account here. Click submit when
                you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter Name" required="required" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name">Last Name</Label>
                <Input
                  id="name"
                  placeholder="Enter Last Name"
                  required="required"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Email</Label>
                <br />
                <Input
                  type="email"
                  id="username"
                  placeholder="Enter Email"
                  required="required"
                />
                {/* <input className=" p-2.5 border-l-neutral-950 w-max" type="email" name="" id="username"  placeholder="Enter Email"/> */}
              </div>
            </CardContent>
            <CardFooter>
              {/* <Button type="submit" className=" bg-black text-white hover:bg-green-500 hover:text-white">SUBMIT</Button> */}
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Password</Label>
                <Input
                  id="current"
                  type="password"
                  required="required"
                  placeholder="Enter password"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">Confirm password</Label>
                <Input
                  id="new"
                  type="password"
                  required="required"
                  placeholder="Enter password"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                type="submit"
                className=" bg-black text-white hover:bg-green-500 hover:text-white"
              >
                SUBMIT
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      
    </div>
    <Link href="/Components/Body/Membership/Form/Login">
      <div className="link underline text-sky-500 flex justify-center">Go To Login Form?</div>
</Link><br />
    </div>
  );
};

export default Page;
