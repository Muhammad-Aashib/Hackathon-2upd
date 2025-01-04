// Import necessary components
import Header from "../header";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Component */}
      <Header />

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white p-4 border-r border-gray-200">
          <nav className="space-y-4">
            <a
              href="#"
              className="flex items-center text-blue-600 font-medium p-2 rounded-lg hover:bg-blue-100"
            >
              <Image
                src="/home.png"
                alt="Dashboard Icon"
                width={24}
                height={24}
              />
              <span className="ml-4">Dashboard</span>
            </a>
            <a
              href="#"
              className="flex items-center text-gray-700 p-2 rounded-lg hover:bg-gray-100"
            >
              <Image
                src="/smallcar.png"
                alt="Car Rent Icon"
                width={24}
                height={24}
              />
              <span className="ml-4">Car Rent</span>
            </a>
            <a
              href="#"
              className="flex items-center text-gray-700 p-2 rounded-lg hover:bg-gray-100"
            >
              <Image
                src="/icons/insight-icon.svg"
                alt="Insight Icon"
                width={20}
                height={20}
              />
              <span className="ml-4">Insight</span>
            </a>
            <a
              href="#"
              className="flex items-center text-gray-700 p-2 rounded-lg hover:bg-gray-100"
            >
              <Image
                src="/icons/reimburse-icon.svg"
                alt="Reimburse Icon"
                width={20}
                height={20}
              />
              <span className="ml-4">Reimburse</span>
            </a>
            <a
              href="#"
              className="flex items-center text-gray-700 p-2 rounded-lg hover:bg-gray-100"
            >
              <Image
                src="/icons/inbox-icon.svg"
                alt="Inbox Icon"
                width={20}
                height={20}
              />
              <span className="ml-4">Inbox</span>
            </a>
            <a
              href="#"
              className="flex items-center text-gray-700 p-2 rounded-lg hover:bg-gray-100"
            >
              <Image
                src="/icons/calendar-icon.svg"
                alt="Calendar Icon"
                width={20}
                height={20}
              />
              <span className="ml-4">Calendar</span>
            </a>

            {/* Preferences Section */}
            <hr className="my-4 border-gray-200" />
            <a
              href="#"
              className="flex items-center text-gray-700 p-2 rounded-lg hover:bg-gray-100"
            >
              <Image
                src="/icons/settings-icon.svg"
                alt="Settings Icon"
                width={20}
                height={20}
              />
              <span className="ml-4">Settings</span>
            </a>
            <a
              href="#"
              className="flex items-center text-gray-700 p-2 rounded-lg hover:bg-gray-100"
            >
              <Image
                src="/icons/help-icon.svg"
                alt="Help Icon"
                width={20}
                height={20}
              />
              <span className="ml-4">Help & Center</span>
            </a>
            <a
              href="#"
              className="flex items-center text-gray-700 p-2 rounded-lg hover:bg-gray-100"
            >
              <Image
                src="/icons/dark-mode-icon.svg"
                alt="Dark Mode Icon"
                width={20}
                height={20}
              />
              <span className="ml-4">Dark Mode</span>
            </a>
            <a
              href="#"
              className="flex items-center text-gray-700 p-2 rounded-lg hover:bg-gray-100"
            >
              <Image
                src="/icons/logout-icon.svg"
                alt="Log Out Icon"
                width={20}
                height={20}
              />
              <span className="ml-4">Log Out</span>
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Details Rental Section */}
            <div className="bg-white rounded-lg shadow p-6 col-span-2 relative">
              <h2 className="text-lg font-semibold mb-4">Details Rental</h2>
              <div
                className="absolute bg-cover bg-center"
                style={{
                  backgroundImage: "url('/map.png')",
                  width: "486px",
                  height: "272px",
                  borderRadius: "10px 0px 0px 0px",
                }}
              ></div>

              <div className="relative mt-[300px] p-4">
                {/* Car Details Section */}
                <div className="flex items-center gap-4">
                  <Image
                    src="/thumb3.png"
                    alt="Car Thumbnail"
                    width={100}
                    height={60}
                    className="rounded-md"
                  />
                  <div>
                    <h3 className="font-bold text-lg">Nissan GT – R</h3>
                    <p className="text-sm text-gray-500">Sport Car</p>
                  </div>
                  <p className="ml-auto text-sm text-gray-500">#9761</p>
                </div>

                <hr className="my-4 border-gray-300" />

                {/* Pick-Up Details */}
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-medium">Pick-Up</h4>
                    <p className="text-sm text-gray-500">Locations</p>
                    <p>Kota Semarang</p>
                    <p className="text-sm text-gray-500">Date & Time</p>
                    <p>20 July 2022, 07:00</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Drop-Off</h4>
                    <p className="text-sm text-gray-500">Locations</p>
                    <p>Kota Semarang</p>
                    <p className="text-sm text-gray-500">Date & Time</p>
                    <p>21 July 2022, 01:00</p>
                  </div>
                </div>

                <hr className="my-4 border-gray-300" />

                {/* Total Rental Price */}
                <div className="text-right">
                  <p className="text-gray-500">Total Rental Price</p>
                  <p className="text-2xl font-bold text-blue-600">$80.00</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    
  );
}
