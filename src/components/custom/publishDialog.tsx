import { AlertDialogCancel } from "../ui/alert-dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
interface detailProps {
  postTitle: string;
  postDescription: string;
}
const PublishDialog = ({
  handler,
  details,
}: {
  handler: (key: string, value: string) => void;
  details: detailProps;
}) => {
  return (
    <>
      <div className="flex flex-col gap-4 w-full">
        <form className="flex flex-col gap-4 w-full">
          <Label htmlFor="postTtitle">Post Title</Label>
          <Input
            className="rounded-none border border-gray-600 text-md focus:border-none"
            type="postTtitle"
            required
            value={details.postTitle}
            onChange={(e) => handler("postTitle", e.target.value)}
          ></Input>
          <Label htmlFor="">Subtitle</Label>
          <textarea
            className="p-3 focus:outline-none border border-gray-600"
            required
            value={details.postDescription}
            onChange={(e) => handler("postDescription", e.target.value)}
          ></textarea>
        </form>
      </div>
    </>
  );
};

export default PublishDialog;
