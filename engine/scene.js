let engine_current_sceene = ""
let engine_sceene_selected = 0
let engine_i3_val = 0

let engine_scenes = [{
    sceene_name: "t0", sceene_bg: [
        "####################",
        "#                  #",
        "#                  #",
        "#                  #",
        "####################"
    ],
    wall_objs: [
        "####################",
        "#   #         ##   #",
        "#        #         #",
        "##    #     #  #   #",
        "####################"
    ],
    game_objects: [{name:"player",symbol:"F",x:1,y:2}]

}]


function change_sceene(sceene) {
    engine_current_sceene = sceene
    engine_load_cur_sceene()
}

function addSceene(sceene_) {
    engine_scenes.push(sceene_)
}

function engine_load_cur_sceene() {
    for (let i = 0; i < engine_objects.length; i++) {
        console.log(engine_objects[i].sceene_name)
        if (engine_current_sceene === engine_objects[i].sceene_name) {
            engine_sceene_selected = i
            console.log(i)
        }
    }

    //console.log(engine_scenes[engine_sceene_selected])

    engine_objects = engine_scenes[engine_sceene_selected].game_objects

    displayBackground(engine_scenes[engine_sceene_selected].sceene_bg)

    for (let i = 0; i < engine_scenes[engine_sceene_selected].wall_objs.length; i++) {
        for (let i2 = 0; i2 < engine_scenes[engine_sceene_selected].wall_objs[i].length; i2++) {
            if (engine_scenes[engine_sceene_selected].wall_objs[i][i2] != ' ') {
                addObject('engine_object_type_wall', i2, i, engine_scenes[engine_sceene_selected].wall_objs[i][i2])
            }
        }
    }
}