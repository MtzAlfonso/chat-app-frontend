interface Props {
  online?: boolean;
}

export const ChatCard = ({ online = false }: Props) => {
  return (
    <button>
      <div className="chats_people bg-white hover:bg-gray-100 active:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:active:bg-gray-900">
        <div className="chats_img mx-auto">
          <span
            className={`absolute ${
              online ? 'bg-green-400' : 'bg-red-500'
            } h-4 w-4 rounded-full fill-current right-0 bottom-0 sm:bottom-1 border-white dark:border-gray-800 border-2`}
          ></span>
          <img
            src="https://ptetutorials.com/images/user-profile.png"
            alt="sunil"
          />
        </div>

        <div className="chats_ib">
          <h5 className="chats_contact">John Doe</h5>
          <div className="flex justify-between">
            <p className="text-xs text-gray-500 w-32 xl:w-48 whitespace-nowrap overflow-ellipsis overflow-hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="text-xs text-gray-500">· Dec 25</p>
          </div>
        </div>
      </div>
    </button>
  );
};
