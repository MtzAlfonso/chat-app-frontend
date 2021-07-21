import { MessageReceived } from './MessageReceived';
import { MessageSend } from './MessageSend';

interface Props {}

export const ChatWindow = (props: Props) => {
  return (
    <div className="col-span-10 lg:col-span-9 row-span-9 grid grid-rows-9">
      <div className="row-span-8 overflow-y-scroll pb-4 px-2">
        <MessageSend />
        <MessageSend />
        <MessageReceived />
        <MessageSend />
        <MessageReceived />
      </div>
      <div className="row-span-1 flex items-center px-2">
        <hr className="border-gray-300" />
        <form className="flex justify-between items-center w-full">
          <textarea
            placeholder="Mensaje..."
            rows={1}
            className="appearance-none rounded-full border-gray-300 dark:border-gray-900 border-2 relative block  placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-600 text-xs sm:text-base focus:border-indigo-400 focus:z-10 focus:ring-0 resize-none mr-2 w-8/12 lg:w-10/12"
          />
          <div className="w-4/12 lg:w-2/12">
            <button
              type="submit"
              className="flex items-center justify-center py-2 w-full bg-indigo-500 text-white rounded-md"
            >
              <i className="fas fa-paper-plane mr-2"></i>
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
