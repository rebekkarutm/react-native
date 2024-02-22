import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function Checkbox({
    onChange,
    checked,
    buttonStyle={},
    activeButtonStyle={},
    inactiveButtonStyle={},
    activeIconProps={},
    inactiveIconProps={},
}) {
    const iconProps = checked ? activeIconProps : inactiveIconProps;
    return (
        <Pressable
            style={[{marginLeft:4},
                buttonStyle,
                checked
                    ? activeButtonStyle
                    : inactiveButtonStyle,
            ]}
            onPress={() => onChange(!checked)}>
            {checked && (
                <Ionicons
                    name='checkmark'
                    size={24}
                    color='white'
                    {...iconProps}
                />
            )}
        </Pressable>
    )
}