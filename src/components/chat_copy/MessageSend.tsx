import React from 'react';

interface Props {}

export const MessageSend = (props: Props) => {
  return (
    <div className="flex justify-end py-3">
      <div className="w-auto max-w-xs whitespace-wrap md:max-w-3xl">
        <p className="message__txt--send">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod aliquam nesciunt quae porro commodi. Unde, laborum itaque. Doloribus, animi eum?
        </p>
        <div className="text-xs mt-2 text-gray-400 ml-auto">
          11:01 AM | <span>June 9</span>
        </div>
      </div>
    </div>
  );
};
