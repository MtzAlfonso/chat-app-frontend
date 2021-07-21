import React from 'react';

interface Props {}

export const MessageReceived = (props: Props) => {
  return (
    <div className="flex justify-start">
      <img
        className="chat_img"
        src="https://ptetutorials.com/images/user-profile.png"
        alt="sunil"
      />
      <div className="w-auto max-w-xs md:max-w-3xl">
        <p className="message__txt--received">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          fuga, voluptatum voluptatem est nulla velit magni excepturi
          voluptates, repudiandae mollitia, repellendus itaque consequuntur
          voluptate? Libero quis, laboriosam consequuntur reprehenderit natus
          tenetur nesciunt fugiat doloremque veritatis voluptatem? Laborum,
          architecto debitis. Et nulla fugiat quia aliquid sint soluta unde
          libero doloribus nihil.
        </p>
        <div className="text-xs mt-2 text-gray-400">
          11:01 AM | <span>June 9</span>
        </div>
      </div>
    </div>
  );
};
