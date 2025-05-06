const Dashboard = () => {
    return (
      <div className="grid -mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow p-4 col-span-1">
          <h3 className="font-bold mb-2">Hi there! I'm a virtual assistant.</h3>
          <div className="text-sm text-gray-500">How can I help you today?</div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Write a message"
              className="w-full p-2 border rounded-lg text-sm"
            />
          </div>
        </div>
  
        <div className="bg-white rounded-2xl shadow p-4 col-span-2">
          <h3 className="font-bold mb-2">My activity</h3>
          <div className="text-sm text-gray-500">What is waiting for you today</div>
          <div className="mt-4 h-32 bg-gray-100 rounded-xl"></div>
        </div>
  
        <div className="bg-white rounded-2xl shadow p-4">
          <h3 className="font-bold mb-2">To-do list</h3>
          <ul className="text-sm text-gray-600">
            <li className="flex justify-between items-center border-b py-2">
              <span>Landing page redesign</span>
              <span className="text-green-500 font-bold">✔</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow p-4 col-span-2">
          <h3 className="font-bold mb-2">Summary</h3>
          <div className="text-sm text-gray-500">Track your performance</div>
          <div className="mt-4 h-32 bg-gray-100 rounded-xl"></div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;