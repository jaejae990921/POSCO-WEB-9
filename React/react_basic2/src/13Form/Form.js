import { useForm } from 'react-hook-form';

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  // handleSubmit() : 두개의 함수를 받는데 하나는 유효할 때 실행되는 함수(필수), 하나는 유효하지 않을 때 실행되는 함수(선택)
  const onValid = (data) => {
    console.log('onValid', data);
  };

  // onInValid 보다 errors를 자주 사용함
  //   const onInValid = (err) => {
  //     console.log('onInValid', err);
  //   };

  console.log('errors', errors);
  //   console.log('watch', watch('username')); // 입력되는 값이 실시간으로 보여짐

  return (
    <>
      {/* onSubmit에 handleSubmit(onValid)를 넣어줌 */}
      <form onSubmit={handleSubmit(onValid)}>
        <input
          type="text"
          placeholder="username"
          {...register('username', {
            required: '이름을 입력하세요',
            minLength: { message: '최소 2글자 이상 작성하세요', value: 2 },
          })} // required가 true가 되면서 메세지에 값이 들어감
        />
        {/* required가 message로 들어가고, 입력하게 되면 minLength의 message가 message로 들어감 */}
        {errors.username?.message}
        <br />
        <input
          type="text"
          placeholder="email"
          {...register('email', {
            required: '이메일을 입력하세요',
            validate: {
              useGmail: (v) => v.includes('@gmail.com') || 'gmail을 사용하세요',
            },
          })}
        />
        {errors.email?.message}
        <br />
        <input type="text" placeholder="password" {...register('password')} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
