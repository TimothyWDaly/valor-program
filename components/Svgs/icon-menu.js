export default function IconMenu(props) {
    return (
        <svg width="35" height="35" viewBox="0 0 24 24" style={props.style}>
            <path d="M0 0h24v24H0z" fill="none" />
            <path
                fill={props.fill || '#000'}
                d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
            />
        </svg>
    );
}
