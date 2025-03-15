var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2025",
  "page_title": "REEFSCAPE",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2025MDSEV",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "code": "as",
      "type": "clickable_image",
      "filename": "2025/field_image.png",
      "clickRestriction": "one",
      "allowableResponses": "6 7 18 19 30 31 42 43 54 55 66 67",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Leave Starting Line",
      "code": "al",
      "type": "bool"
    },
    { "name": "Coral Scoring",
      "code": "acs",
      "type": "team",
      "min": 0,
      "max": 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    },
    { "name": "Processor Scoring",
      "code": "aps",
      "type": "team",
      "min": 0,
      "max": 99999999999999999999999999999999999999999999999999999999999
    },
    { "name": "Net Scoring",
      "code": "ans",
      "type": "team",
      "min": 0,
      "max": 99999999999999999999999999999999999999999999999999999999999
    }
  ],
  "teleop": [
    { "name": "Coral Scoring",
      "code": "tcs",
      "type": "team",
      "min": 0,
      "max": 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    },
    { "name": "Coral Missed",
      "code": "tcm",
      "type": "team",
      "min": 0,
      "max": 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    },
    { "name": "Processor Scoring",
      "code": "tps",
      "type": "team",
      "min": 0,
      "max": 99999999999999999999999999999999999999999999999999999999999
    },
    { "name": "Net Scoring",
      "code": "tns",
      "type": "team",
      "min": 0,
      "max": 99999999999999999999999999999999999999999999999999999999999
    },
    { "name": "Net Missed",
      "code": "tnm",
      "type": "team",
      "min": 0,
      "max": 99999999999999999999999999999999999999999999999999999999999
    },
    { "name": "Coral Pickup From",
      "code": "tpuc",
      "type": "radio",
      "choices": {
        "s": "Coral Station<br>",
        "f": "Floor<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Algae Pickup From",
      "code": "tpua",
      "type": "radio",
      "choices": {
        "s": "Reef<br>",
        "f": "Floor<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Scored in<br>Opponent<br>Processor",
      "code": "opp",
      "type": "bool"
    }
  ],
  "endgame": [
    { "name": "Final Robot Status",
      "code": "efs",
      "type":"radio",
      "choices": {
        "1": "Parked<br>",
        "1": "Parked/Failed Climb<br>",
        "6": "Shallow Cage<br>",
        "12": "Deep Cage<br>",
        "0": "Not attempted"
      },
      "defaultValue": "0"
    }
  ],
  "postmatch": [
    { "name": "Attained Coopertition Pt",
      "code": "cop",
      "type": "bool"
    },
    { "name": "Driver Skill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "n": "Not Effective<br>",
        "a": "Average<br>",
        "v": "Very Effective<br>",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Defense",
      "code": "def",
      "type": "radio",
      "choices": {
        "1": "Did little to slow down opposing teams; unable to keep up<br>",
        "2": "Slowed down the scoring the opposing teams a little bit<br>",
        "3": "Did a moderate job slowing down the opposing team<br>",
        "4": "Did an extremely good job slowing down the opposing team<br>",
        "0": "Not Observed"
      },
      "defaultValue": "0"
    },
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Make good<br>alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 55
    }
  ]
}`;
