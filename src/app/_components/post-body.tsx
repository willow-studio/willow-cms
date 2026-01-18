import cn from "classnames";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
  className?: string;
  style?: React.CSSProperties;
};

export function PostBody({ content, className, style }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={cn(markdownStyles["markdown"], className)}
        style={style}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
