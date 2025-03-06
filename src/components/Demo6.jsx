import { useToggle } from '../hooks/useToggle';

export function Demo6() {
    //   const [value, toggle] = useToggle()
    //   const [value, toggle] = useToggle(['light', 'dark'])
    const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal'])

    return (
        <button onClick={() => toggle()}>
            {/* <button onClick={() => toggle("dark")}> */}
            {value}
        </button>
    );
}

// Еще примеры использования
// toggle(); // -> value === 'light'
// toggle(); // -> value === 'dark'
// // Так же можно передать конкретное значение и тогда
// // value станет одним из значений
// toggle('dark'); // -> value === 'dark'