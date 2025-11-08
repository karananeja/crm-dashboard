interface Message {
  id: string;
  name: string;
  message: string;
  time: string;
  avatar: string;
}

const messages: Message[] = [
  {
    id: "1",
    name: "Nicholas Gordon",
    message: "Hey, can we schedule a meeting?",
    time: "10m",
    avatar: "",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    message: "The report is ready for review",
    time: "15m",
    avatar: "",
  },
  {
    id: "3",
    name: "Michael Chen",
    message: "Thanks for the update!",
    time: "1h",
    avatar: "",
  },
  {
    id: "4",
    name: "Emily Davis",
    message: "Can you send me the files?",
    time: "2h",
    avatar: "",
  },
];

export function Messages() {
  return (
    <>
      <h3 className="py-6 font-semibold">Messages</h3>

      <div className="px-6 py-3">
        <div className="space-y-8">
          {messages.map((msg) => (
            <div key={msg.id} className="flex items-start gap-3">
              <div className="flex justify-center items-center bg-gray-300 rounded-lg size-8" />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <p className="font-medium text-gray-900 text-sm">
                    {msg.name}
                  </p>
                  <span className="text-gray-500 text-xs">{msg.time}</span>
                </div>
                <p className="mt-1 text-gray-600 text-sm truncate">
                  {msg.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
