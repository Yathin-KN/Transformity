const podcastStats = [
    {
      title: "Five Star",
      content: "75+ Five Star Ratings"
    },
    {
      title: "2.2k",
      content: "2.2k+ Downloads"
    },
    {
      title: "7M+",
      content: "7M+ Subscribers"
    },
    {
      title: "50k",
      content: "50k+ Episodes"
    },
    {
      title: "370",
      content: "370 Reviews"
    }
  ];

const Item=({index}:{index:number})=>{
  return (
    <div className="text-center">
        <h1 className="text-4xl font-bold">{podcastStats[index].title}</h1>
        <p className="my-3">
          {podcastStats[index].content}
        </p>
    </div>
  )
}
const band = () => {
  return (
    <div className="w-full flex justify-between p-4">
      {
        podcastStats.map((_item,index)=>{
          return <Item index={index}/>
        })
      }
    </div>
  )
}

export default band