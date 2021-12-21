const IconCheck = (props) => {
    return (
        <svg
            {...props}
            width={props.width || '12'}
            height={props.height || '12'}
            viewBox={`0 0 12 12`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
                width={props.width || '12'}
                height={props.height || '12'}
                fill="white"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.0689 1.65976C11.2819 1.44675 11.6272 1.44675 11.8402 1.65976C12.0339 1.85341 12.0515 2.15644 11.8931 2.36997L11.8402 2.43115L4.56751 9.70388C4.37386 9.89752 4.07084 9.91513 3.8573 9.75669L3.79612 9.70388L0.15976 6.06751C-0.0532533 5.8545 -0.0532533 5.50914 0.15976 5.29612C0.353408 5.10248 0.656436 5.08487 0.869972 5.24331L0.931149 5.29612L4.18182 8.54655L11.0689 1.65976Z"
                fill="#1E1E1E"
            />
        </svg>
    );
};
export default IconCheck;
