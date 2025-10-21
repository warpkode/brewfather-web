import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CheckIcon, PlayCircle, Beer, Zap, Circle } from "lucide-react";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col pt-20">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center px-6 py-16 md:py-24 text-center">
          <div className="mb-6 md:mb-8 bg-[#30323d] rounded-2xl p-2 md:p-3">
            <Image
              src="/images/icon.png"
              alt="Brewfather Icon"
              width={160}
              height={160}
              priority
              className="w-28 h-28 md:w-32 md:h-32"
            />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 md:mb-8 max-w-4xl px-4">
            Powerful and easy to use tool<br className="hidden sm:inline" /><span className="sm:hidden"> </span>for your brewing needs
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 mb-6 w-full sm:w-auto px-4 sm:px-0">
            <Link href="https://web.brewfather.app/" className="w-full sm:w-auto">
              <Button size="lg" className="text-sm sm:text-base px-8 sm:px-10 py-5 sm:py-6 font-semibold uppercase tracking-wide w-full sm:w-auto">
                Get Started
              </Button>
            </Link>

            <Link href="https://docs.brewfather.app/" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="text-sm sm:text-base px-8 sm:px-10 py-5 sm:py-6 font-semibold uppercase tracking-wide w-full sm:w-auto">
                Learn More
              </Button>
            </Link>
          </div>

          <Link href="https://youtu.be/s1ZlDfQRXy4" className="flex items-center gap-2 text-primary hover:underline mb-8">
            <PlayCircle className="w-5 h-5" />
            <span>Watch walkthrough video</span>
          </Link>

        <div className="flex flex-col items-center gap-4 mt-8">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link href="https://apps.apple.com/us/app/brewfather/id1488585822" className="transition-transform hover:scale-105">
              <Image
                src="/images/badge-ios-black.svg"
                alt="Download on App Store"
                width={150}
                height={50}
                className="h-12 w-auto block dark:hidden"
              />
              <Image
                src="/images/badge-ios-white.svg"
                alt="Download on App Store"
                width={150}
                height={50}
                className="h-12 w-auto hidden dark:block"
              />
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=com.warpkode.brewfather" className="transition-all hover:scale-105 dark:opacity-90 dark:hover:opacity-100">
              <Image
                src="/images/badge-android.svg"
                alt="Get it on Google Play"
                width={155}
                height={60}
                className="h-[70px] w-auto dark:brightness-110"
              />
            </Link>
          </div>
          <Link href="https://web.brewfather.app" className="transition-transform hover:scale-105">
            <Image
              src="/images/pwa-logo-dark.svg"
              alt="Progressive Web App"
              width={120}
              height={40}
              className="h-12 w-auto block dark:hidden"
            />
            <Image
              src="/images/pwa-logo-white.svg"
              alt="Progressive Web App"
              width={120}
              height={40}
              className="h-12 w-auto hidden dark:block"
            />
          </Link>
        </div>
      </section>

      {/* Three Points Section */}
      <section className="px-6 py-12 md:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 md:mb-6 bg-[#30323d] rounded-full p-5 md:p-6 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
              <div className="relative">
                <Circle className="w-12 h-12 text-[#f9a825]" strokeWidth={2} />
                <Circle className="w-8 h-8 text-[#f9a825] absolute top-2 left-2" strokeWidth={2} />
              </div>
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Simple</h2>
            <p className="text-sm md:text-base text-muted-foreground px-4">
              Easily create and manage your recipes.<br className="hidden sm:inline" /><span className="sm:hidden"> </span>Keep track of all the details in your batches and your ingredients inventory.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 md:mb-6 bg-[#30323d] rounded-full p-5 md:p-6 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
              <Beer className="w-10 h-10 md:w-12 md:h-12 text-[#f9a825]" strokeWidth={2} />
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Craft</h2>
            <p className="text-sm md:text-base text-muted-foreground px-4">
              Craft recipes in conformity with style guidelines. Get calculated stats for your recipes and batches.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 md:mb-6 bg-[#30323d] rounded-full p-5 md:p-6 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
              <Zap className="w-10 h-10 md:w-12 md:h-12 text-[#f9a825]" strokeWidth={2} fill="#f9a825" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Utility</h2>
            <p className="text-sm md:text-base text-muted-foreground px-4">
              Works on any device with a browser. Import and export recipes. Monitor your fermentation with connected devices.
            </p>
          </div>
        </div>
      </section>

      {/* Screens Section */}
      <section className="px-4 sm:px-6 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <Link href="https://web.brewfather.app/">
            <Image
              src="/images/responsive_mdx.jpg"
              alt="Brewfather Screens"
              width={1200}
              height={800}
              className="w-full rounded-lg shadow-xl"
            />
          </Link>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-4 sm:px-6 py-12 md:py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 text-center max-w-4xl mx-auto">
            Brewfather utilizes the latest technology to bring you <strong>the best brewing software</strong> available.
            Run it in any modern browser and mobile device. Work <strong>offline</strong> with automatic <strong>synchronization</strong> when
            you get back online. Combining a <strong>powerful recipe designer</strong> with intuitive batch tracking and inventory
            management to make your brew-day easier. <strong>Integrated</strong> with many popular devices.{" "}
            <Link href="https://web.brewfather.app/" className="font-bold underline">
              Get started today!
            </Link>
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              "Multi device support",
              "Multiple languages supported",
              "Offline support",
              "Automatic synchronization",
              "Recipe Designer",
              "Recipe Library",
              "Batch Tracking",
              "Mash and sparge water calculator",
              "Recipe Sharing",
              "Brew Timer",
              "Water profile + pH estimate",
              "Style Guidelines",
              "Recipe Scaling",
              "Inventory Management",
              "Cost Tracking",
              "BeerXML import/export",
              "Tilt Hydrometer integration",
              "Brewtools integration",
              "iSpindel integration",
              "SmartPID integration",
              "MyBrewbot integration",
              "BrewPiLess integration",
              "Brewbrain Float integration",
              "Grainfather integration",
              "RAPT Cloud integration",
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className={feature.includes("much much more") ? "font-bold" : ""}>
                  {feature}
                </span>
              </div>
            ))}
            <div className="flex items-start gap-2">
              <CheckIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="font-bold">...and much much more!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Device Integrations Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-lg mb-4">
                Brewfather connects with many devices for fermentation logging, brew automation process control and more...
              </p>
              <p className="text-lg mb-8">
                Learn how Brewfather seamlessly integrates with:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { name: "Tilt", url: "https://docs.brewfather.app/integrations/tilt-hydrometer", icon: "/images/devices/tilt-logo.png" },
                  { name: "Brewtools", url: "https://docs.brewfather.app/integrations/brewtools", icon: "/images/devices/brewtools.png" },
                  { name: "RAPT Cloud", url: "https://docs.brewfather.app/integrations/rapt", icon: "/images/devices/rapt.svg", iconDark: "/images/devices/rapt-dark.svg" },
                  { name: "SmartPID", url: "https://docs.brewfather.app/integrations/smartpid", icon: "/images/devices/smartpid.png" },
                  { name: "MyBrewbot", url: "https://docs.brewfather.app/integrations/mybrewbot", icon: "/images/devices/mybrewbot.png", needsBg: true },
                  { name: "Brewbrain", url: "https://docs.brewfather.app/integrations/float-hydrometer", icon: "/images/devices/float.svg" },
                  { name: "iSpindel", url: "https://docs.brewfather.app/integrations/ispindel", icon: "/images/devices/iSpindel.svg", iconDark: "/images/devices/iSpindel-dark.svg" },
                  { name: "Grainfather", url: "https://docs.brewfather.app/integrations/grainfather", icon: "/images/devices/controlboxm.svg", iconDark: "/images/devices/controlboxm-dark.svg" },
                  { name: "Custom", url: "https://docs.brewfather.app/integrations/custom-stream", icon: "/images/devices/customdevice.svg", iconDark: "/images/devices/customdevice-dark.svg" },
                ].map((device) => (
                  <Link key={device.name} href={device.url}>
                    <Card className="p-4 text-center hover:shadow-lg transition-shadow h-full flex flex-col items-center gap-3">
                      <div className={`w-16 h-16 relative flex items-center justify-center rounded-lg p-2 ${device.needsBg ? 'bg-muted/60 dark:bg-white/30' : ''}`}>
                        {device.iconDark ? (
                          <>
                            <Image
                              src={device.icon}
                              alt={device.name}
                              width={64}
                              height={64}
                              className="object-contain max-w-full max-h-full block dark:hidden"
                            />
                            <Image
                              src={device.iconDark}
                              alt={device.name}
                              width={64}
                              height={64}
                              className="object-contain max-w-full max-h-full hidden dark:block"
                            />
                          </>
                        ) : (
                          <Image
                            src={device.icon}
                            alt={device.name}
                            width={64}
                            height={64}
                            className="object-contain max-w-full max-h-full"
                          />
                        )}
                      </div>
                      <span className="font-medium">{device.name}</span>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            <div className="order-1 md:order-2">
              <Link href="https://web.brewfather.app/">
                <Image
                  src="/images/chart_example_2.png"
                  alt="Brewfather Fermentation Chart"
                  width={800}
                  height={600}
                  className="w-full rounded-lg shadow-xl"
                />
              </Link>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Live fermentation chart with device integrations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Library Section */}
      <section className="px-6 py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg font-bold mb-6">
                Discover and brew quality recipes added by the Brewfather community
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Thousands of quality recipes available for you",
                  "Instant and powerful search capabilities",
                  "Browse styles and get suggestions for recipes to brew",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <p className="text-lg mb-4">
                Do you want to take a look on what Brewfather has to offer?
              </p>
              <Link href="https://web.brewfather.app/">
                <Button variant="outline" size="lg">
                  Join for free today!
                </Button>
              </Link>
            </div>

            <div>
              <Link href="https://web.brewfather.app/">
                <Image
                  src="/images/recipe_library_web.jpg"
                  alt="Brewfather Recipe Library"
                  width={800}
                  height={600}
                  className="w-full rounded-lg shadow-xl"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card p-8 rounded-lg shadow-lg border">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Stay up to date, join the Brewfather newsletter!
            </h3>
            <form
              action="https://app.us18.list-manage.com/subscribe/post?u=32f226b8ca31bef549e6ffc7a&amp;id=e48be3e1de"
              method="post"
              target="_blank"
              className="space-y-4"
            >
              <Input
                type="email"
                name="EMAIL"
                placeholder="Email Address"
                required
                className="w-full"
              />
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Brewfather will use the information you provide on this form to be in touch with you and to provide updates and marketing.
                </p>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    name="gdpr[34517]"
                    value="Y"
                    defaultChecked
                    className="rounded"
                  />
                  Email
                </label>
                <p className="text-xs text-muted-foreground">
                  You can change your mind at any time by clicking the unsubscribe in any email you receive, or by contacting us at hello@brewfather.app.
                </p>
                <p className="text-xs text-muted-foreground">
                  We use MailChimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to MailChimp for processing.{" "}
                  <Link href="https://mailchimp.com/legal/" className="underline" target="_blank">
                    Learn more about MailChimp&apos;s privacy practices
                  </Link>
                </p>
              </div>
              <input type="text" name="b_32f226b8ca31bef549e6ffc7a_e48be3e1de" className="hidden" aria-hidden="true" />
              <Button type="submit" className="w-full" size="lg">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-muted/50 mt-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Brewfather. All rights reserved.
              </p>
            </div>

            <div className="flex gap-6">
              <Link href="https://www.facebook.com/brewfather/" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>

              <Link href="https://twitter.com/brewfatherapp" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">X (formerly Twitter)</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>

              <Link href="https://www.youtube.com/c/Brewfather" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Link>

              <Link href="https://www.instagram.com/brewfatherapp" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                </svg>
              </Link>

              <Link href="https://discord.gg/WwBXhrUVeK" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Discord</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
      </main>
    </>
  );
}
