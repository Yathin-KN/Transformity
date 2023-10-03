import React from 'react'
import { Card } from '../ui/card';

const blogCard = ({post,index}) => {
  return (
    <Card
    key={index.toString()}
    className="overflow-hidden cursor-pointer shadow-lg  col-span-1 rounded-md"
  >
    <img
      className="brightness-100 hover:brightness-50"
      src={
        post.postImage
      }
    ></img>

    <div className="p-3">
      
      <div className="flex flex-nowrap pt-2">
        
        <p className="flex items-center gap-2 w-full justify-between">
          <p className="flex gap-2 flex-nowrap justify-between">
            <p className="text-sm text-blue-700 font-light">
              {post.user_info.username}
            </p>
          </p>

          <p className="flex gap-2">
            <p className="text-xs text-gray-700">
              {post.postDate.substring(0,10)}
            </p>
            <p className="text-xs text-gray-700">
              {post.postTime}
            </p>
          </p>
        </p>
      </div>
      <p className="font-bold text-lg capitalize py-2">
        {post.postDetails.postTitle}
      </p>
      <div className="flex flex-col justify-between h-full">
        <p className="h-[6rem] text-sm overflow-hidden font-sans text-muted-foreground">
          {post.postDetails.postDescription}
        </p>
        <p className="space-x-2">
        
      </p>
      </div>
    </div>
  </Card>
  )
}

export default blogCard