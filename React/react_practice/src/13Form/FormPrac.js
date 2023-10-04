import { useForm } from 'react-hook-form';

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    console.log('onValid', data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <div>
          <label>이름 : </label>
          <input
            type="text"
            {...register('username', {
              required: '이름은 필수 항목입니다.',
            })}
          />
          {errors.username && (
            <div style={{ color: 'red' }}>{errors.username.message}</div>
          )}
        </div>
        <div>
          <label>나이 : </label>
          <input
            type="number"
            {...register('age', {
              min: { message: '0 이상의 숫자만 입력 가능합니다.', value: 0 },
            })}
          />
          {errors.age && (
            <div style={{ color: 'red' }}>{errors.age.message}</div>
          )}
        </div>
        <button type="submit">제출</button>
      </form>
    </>
  );
}
