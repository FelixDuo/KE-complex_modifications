function main() {
    console.log(
        JSON.stringify(
            {
                title: 'MINILA Emulator',
                rules: [
                    {
                        "description": "「英数」と「かな」キーで、Majestouch MINILA再現",
                        "manipulators": [
                            {
                                "conditions": [
                                    {
                                        "name": "MINILA_FN",
                                        "type": "variable_if",
                                        "value": 1
                                    }
                                ],
                                "description": " MINILA_FN + S ▶︎ LEFT ARROW ",
                                "from": {
                                    "key_code": "s",
                                    "modifiers": { "optional": ["any"] }
                                },
                                "to": [{ "key_code": "left_arrow" }],
                                "type": "basic"
                            },
                            {
                                "conditions": [
                                    {
                                        "name": "MINILA_FN",
                                        "type": "variable_if",
                                        "value": 1
                                    }
                                ],
                                "description": " MINILA_FN + D ▶︎ DOWN ARROW ",
                                "from": {
                                    "key_code": "d",
                                    "modifiers": { "optional": ["any"] }
                                },
                                "to": [{ "key_code": "down_arrow" }],
                                "type": "basic"
                            },
                            {
                                "conditions": [
                                    {
                                        "name": "MINILA_FN",
                                        "type": "variable_if",
                                        "value": 1
                                    }
                                ],
                                "description": " MINILA_FN + E ▶︎ UP ARROW ",
                                "from": {
                                    "key_code": "e",
                                    "modifiers": { "optional": ["any"] }
                                },
                                "to": [{ "key_code": "up_arrow" }],
                                "type": "basic"
                            },
                            {
                                "conditions": [
                                    {
                                        "name": "MINILA_FN",
                                        "type": "variable_if",
                                        "value": 1
                                    }
                                ],
                                "description": " MINILA_FN + F ▶︎ RIGHT ARROW ",
                                "from": {
                                    "key_code": "f",
                                    "modifiers": { "optional": ["any"] }
                                },
                                "to": [{ "key_code": "right_arrow" }],
                                "type": "basic"
                            },
                            {
                                "conditions": [
                                    {
                                        "name": "MINILA_FN",
                                        "type": "variable_if",
                                        "value": 1
                                    }
                                ],
                                "description": " MINILA_FN + J ▶︎ Insert ",
                                "from": {
                                    "key_code": "j",
                                    "modifiers": { "optional": ["any"] }
                                },
                                "to": [{ "key_code": "insert" }],
                                "type": "basic"
                            },
                            {
                                "conditions": [
                                    {
                                        "name": "MINILA_FN",
                                        "type": "variable_if",
                                        "value": 1
                                    }
                                ],
                                "description": " MINILA_FN + K ▶︎ Home ",
                                "from": {
                                    "key_code": "k",
                                    "modifiers": { "optional": ["any"] }
                                },
                                "to": [
                                    {
                                        "key_code": "a",
                                        "modifiers": ["control"]
                                    }
                                ],
                                "type": "basic"
                            },
                            {
                                "conditions": [
                                    {
                                        "name": "MINILA_FN",
                                        "type": "variable_if",
                                        "value": 1
                                    }
                                ],
                                "description": " MINILA_FN + L ▶︎ PageUp ",
                                "from": {
                                    "key_code": "l",
                                    "modifiers": { "optional": ["any"] }
                                },
                                "to": [{ "key_code": "page_up" }],
                                "type": "basic"
                            },
                            {
                                "conditions": [
                                    {
                                        "name": "MINILA_FN",
                                        "type": "variable_if",
                                        "value": 1
                                    }
                                ],
                                "description": " MINILA_FN + ; ▶︎ Delete (Backspace) ",
                                "from": {
                                    "key_code": "semicolon",
                                    "modifiers": { "optional": ["any"] }
                                },
                                "to": [{ "key_code": "delete_or_backspace" }],
                                "type": "basic"
                            },
                            {
                                "conditions": [
                                    {
                                        "name": "MINILA_FN",
                                        "type": "variable_if",
                                        "value": 1
                                    }
                                ],
                                "description": " MINILA_FN + M ▶︎ Delete Forward ",
                                "from": {
                                    "key_code": "m",
                                    "modifiers": { "optional": ["any"] }
                                },
                                "to": [{ "key_code": "delete_forward" }],
                                "type": "basic"
                            },
                            {
                                "conditions": [
                                    {
                                        "name": "MINILA_FN",
                                        "type": "variable_if",
                                        "value": 1
                                    }
                                ],
                                "description": " MINILA_FN + , ▶︎ End ",
                                "from": {
                                    "key_code": "comma",
                                    "modifiers": { "optional": ["any"] }
                                },
                                "to": [
                                    {
                                        "key_code": "e",
                                        "modifiers": ["control"]
                                    }
                                ],
                                "type": "basic"
                            },
                            {
                                "conditions": [
                                    {
                                        "name": "MINILA_FN",
                                        "type": "variable_if",
                                        "value": 1
                                    }
                                ],
                                "description": " MINILA_FN + . ▶︎ PageDown ",
                                "from": {
                                    "key_code": "period",
                                    "modifiers": { "optional": ["any"] }
                                },
                                "to": [{ "key_code": "page_down" }],
                                "type": "basic"
                            },
                            {
                                "description": " EISUU ▶︎ MINILA_FN ",
                                "from": {
                                    "key_code": "japanese_eisuu",
                                    "modifiers": { "optional": ["any"] }
                                },
                                "to": [
                                    {
                                        "set_variable": {
                                            "name": "MINILA_FN",
                                            "value": 1
                                        }
                                    }
                                ],
                                "to_after_key_up": [
                                    {
                                        "set_variable": {
                                            "name": "MINILA_FN",
                                            "value": 0
                                        }
                                    }
                                ],
                                "to_if_alone": [{ "key_code": "japanese_eisuu" }],
                                "type": "basic"
                            },
                            {
                                "description": " KANA ▶︎ MINILA_FN ",
                                "from": {
                                    "key_code": "japanese_kana",
                                    "modifiers": { "optional": ["any"] }
                                },
                                "to": [
                                    {
                                        "set_variable": {
                                            "name": "MINILA_FN",
                                            "value": 1
                                        }
                                    }
                                ],
                                "to_after_key_up": [
                                    {
                                        "set_variable": {
                                            "name": "MINILA_FN",
                                            "value": 0
                                        }
                                    }
                                ],
                                "to_if_alone": [{ "key_code": "japanese_kana" }],
                                "type": "basic"
                            }
                        ]
                    }
                ]
            },
            null,
            '  '
        )
    )
}

main()
