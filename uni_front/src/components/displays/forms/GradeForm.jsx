import { useRef } from "react";
import usePatch from "../../UsePatch"

const GradeForm = (gid) => {
  const FORM_ENDPOINT = `http://127.0.0.1:8000/api/grade/${gid}/`;
  const formElement = useRef(null);
  const additionalData = {
    sent: new Date().toISOString(),
  };

  const { handleSubmit, status, message } = usePatch({
    form: formElement.current, additionalData,
  });

  if (status === "success") {
    return (
      <>
        <div>Thank you!</div>
        <div>{message}</div>
      </>
    );
  }

  if (status === "error") {
    return (
      <>
        <div>Something bad happened!</div>
        <div>{message}</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="PATCH"
      target="_blank"
      ref={formElement}
    >
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Ca Mark"
          name="ca_mark"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Exam Mark"
          name="exam_mark"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Total Grade"
          name="total_grade"
          required
        />
      </div>     
     
     
      {status !== "loading" && (
        <div className="mb-3 pt-0">
          <button type="submit">
            Submit
          </button>
        </div>
      )}
    </form>
  );
};

export default GradeForm;