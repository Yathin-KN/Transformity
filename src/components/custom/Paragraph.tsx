import { useState } from "react";
import BlogItem from "./blogItem";
import useBlogStore from "@/store/blog";

const Paragraph = ({ index }: { index: number }) => {
  const [paragrahJson, setParagraphJson] = useState<any>({
    type: "Description",
    content: "",
  });
  const { updateBlogItem } = useBlogStore();
  const handleChange = (title: string) => {
    updateBlogItem(index,{
        type: "Description",
        content: title, 
    })
    setParagraphJson(() => {
      return {
        type: "Description",
        content: title,
      };
    });
  };

  return (
    <div className="w-full relative h-auto">
      <span className="absolute top-4 right-4">{index}</span>
      <BlogItem
        item={paragrahJson}
        handlers={{
          onChangeHandler: handleChange,
        }}
      />
    </div>
  );
};

export default Paragraph;
