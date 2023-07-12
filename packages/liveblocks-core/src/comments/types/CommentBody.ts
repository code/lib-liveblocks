export type CommentBodyBlockElement = CommentBodyParagraph;

export type CommentBodyInlineElement = CommentBodyText | CommentBodyMention;

export type CommentBodyElement =
  | CommentBodyBlockElement
  | CommentBodyInlineElement;

export type CommentBodyParagraph = {
  type: "paragraph";
  children: CommentBodyInlineElement[];
};

export type CommentBodyMention = {
  type: "mention";
  userId: string;
};

export type CommentBodyText = {
  bold?: boolean;
  italic?: boolean;
  text: string;
};

export type CommentBody = {
  content: CommentBodyBlockElement[];
};
