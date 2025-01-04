export default function Sidebar() {
    return (
        <aside className="w-[250px] bg-white shadow-md p-6 rounded-lg md:relative md:block hidden min-h-screen sticky top-0">
            <h3 className="text-lg font-semibold mb-6">Filters</h3>
            <div className="space-y-8">
                {/* Type Section */}
                <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Type</h4>
                    <ul className="space-y-3">
                        {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map((type) => (
                            <li className="flex items-center gap-3" key={type}>
                                <input type="checkbox" id={type.toLowerCase()} className="form-checkbox text-blue-600" />
                                <label htmlFor={type.toLowerCase()} className="text-sm text-gray-800">
                                    <span className="font-semibold">{type}</span> <span className="font-normal text-gray-500">(10)</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Capacity Section */}
                <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Capacity</h4>
                    <ul className="space-y-3">
                        {["2 Person", "4 Person", "6 Person", "8 or More"].map((capacity, index) => (
                            <li className="flex items-center gap-3" key={index}>
                                <input type="checkbox" id={capacity.toLowerCase().replace(" ", "")} className="form-checkbox text-blue-600" />
                                <label htmlFor={capacity.toLowerCase().replace(" ", "")} className="text-sm text-gray-800">
                                    <span className="font-semibold">{capacity}</span> <span className="font-normal text-gray-500">(10)</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Price Range Section */}
                <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Price</h4>
                    <div>
                        <input type="range" className="w-full text-blue-600" />
                        <p className="text-sm text-gray-800 mt-2">Max: $100.00</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
