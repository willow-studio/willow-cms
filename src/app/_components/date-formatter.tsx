import { Lang } from "@/interfaces/language";
import { format, parseISO } from "date-fns";

type Props = {
  dateString: string;
  locale?: Lang;
};

const DateFormatter = ({ dateString, locale = "en" }: Props) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, locale === "zh" ? "yyyy/MM/dd HH:mm:ss" : "LLLL	d, yyyy")}
    </time>
  );
};

export default DateFormatter;
