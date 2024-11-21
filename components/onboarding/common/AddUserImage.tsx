interface Props {
  profileImage?: string | null;
  className?: string;
}

export const AddUserImage = ({ profileImage, className }: Props) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      <p className="text-sm text-muted-foreground">Add a photo</p>
    </div>
  );
};
