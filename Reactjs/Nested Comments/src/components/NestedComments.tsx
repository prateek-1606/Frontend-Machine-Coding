import { useState } from "react";
interface Comment {
  id: number;
  text: string;
  replies: Comment[];
}

interface ListCommentsProps {
  comments: Comment[];
  addReply: (commentId: number, text: string) => void;
}

interface SingleCommentProps {
  comment: Comment;
  addReply: (commentId: number, text: string) => void;
}

const ListComments = ({ comments, addReply }: ListCommentsProps) => {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <div
            style={{
              paddingLeft: "20px",
              borderLeft: "1px solid grey",
              marginTop: "20px",
            }}
          >
            <SingleComment comment={comment} addReply={addReply} />
            {comment.replies && (
              <ListComments comments={comment.replies} addReply={addReply} />
            )}
          </div>
        );
      })}
    </div>
  );
};

const SingleComment = ({ comment, addReply }: SingleCommentProps) => {
  const [isAddingReply, setIsAddingReply] = useState(false);
  const [text, setText] = useState("");

  return (
    <>
      <div
        style={{
          fontSize: "20px",
        }}
      >
        {comment.text}
      </div>
      <div
        style={{
          color: "blue",
          cursor: "pointer",
        }}
        onClick={() => setIsAddingReply(!isAddingReply)}
      >
        Add a reply
      </div>
      {isAddingReply && (
        <div>
          <input
            placeholder="Write Reply"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={() => {
              addReply(comment.id, text);
              setText("");
              setIsAddingReply(false);
            }}
          >
            Add Reply
          </button>
        </div>
      )}
    </>
  );
};

const NestedComments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [text, setText] = useState("");

  const addComment = (e: any) => {
    setComments([
      ...comments,
      {
        id: Date.now(),
        text,
        replies: [],
      },
    ]);

    setText("");
  };

  function addReplyRecursively(
    list: Comment[],
    commentId: number,
    newReply: Comment
  ): Comment[] {
    return list.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [
            ...addReplyRecursively(comment.replies, commentId, newReply),
            newReply,
          ],
        };
      }

      return {
        ...comment,
        replies: addReplyRecursively(comment.replies, commentId, newReply),
      };
    });
  }

  const addReply = (commentId: number, text: string) => {
    const newReply = {
      id: Date.now(),
      text,
      replies: [],
    };

    setComments(addReplyRecursively(comments, commentId, newReply));
  };

  return (
    <div>
      <div>
        <input
          placeholder="Enter Comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addComment}>Submit</button>
      </div>

      <ListComments comments={comments} addReply={addReply} />
    </div>
  );
};

export default NestedComments;
