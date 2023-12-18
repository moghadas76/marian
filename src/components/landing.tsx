/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/fhmXHzWmHPp
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import profile from "../../public/profile.jpeg"
import Image from 'next/image'


export function Landing() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <p className="text-2xl font-bold">Marian Goosens</p>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 py-6">
        <section className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">Welcome to Dutch Language Classes</h1>
              <p className="text-lg text-gray-700">Join our classes and learn Dutch from an experienced teacher.</p>
              <Button className="bg-blue-500 text-white px-6 py-3 rounded">Sign Up</Button>
            </div>
            <Image
              src={profile}
              alt="Teacher's Image"
              layout="responsive"
              placeholder="blur"
            />
            {/* <img
              alt="Teacher's Image"
              className="mx-auto h-64 w-64 object-cover rounded-full"
              height="300"
              style={{
                aspectRatio: "300/300",
                objectFit: "cover",
              }}
              width="300"
            /> */}
          </div>
        </section>
        <section className="container mx-auto px-4 md:px-6 my-10">
          <div className="flex flex-col space-y-6">
            <h2 className="text-2xl font-bold">Our Services</h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-bold">Beginner's Course</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">Learn the basics of Dutch language.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-bold">Intermediate Course</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">Improve your Dutch language skills.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-bold">Advanced Course</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">Master the Dutch language.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 md:px-6 my-10">
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-2xl font-bold">Support Our Work</h2>
            <p className="text-lg text-center text-gray-700">
              Your donation helps us to provide quality Dutch language education.
            </p>
            <Button className="bg-red-500 text-white px-6 py-3 rounded">Donate</Button>
          </div>
        </section>
      </main>
      <footer className="flex justify-center items-center h-14 border-t">
        <p className="text-sm text-gray-700">© 2023 Dutch Language Teacher. All rights reserved.</p>
      </footer>
    </div>
  )
}