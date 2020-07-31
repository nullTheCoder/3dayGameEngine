// The Three Day Engine
// Copyright(C) 2020 The TDE Team
//
// This program is free software: you can redistribute it and / or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.See the
// GNU General Public License for more details.
// You should have received a copy of the GNU General Public License
// along with this program.If not, see https://www.gnu.org/licenses/.

let additional_animated_scenes = []

let additional_interval_toggle

let additional_set_functionToCall = []

let additional_current_anim

function additional_addAnimatedScene(name, timing, animation) {
    additional_addAnimatedScene.push({scene_name:name,time_betwen_frames:timing,animation:animation})
}

function additional_playAnimationScene(name, functionToCall) {
    engine_objects = []
    additional_interval_toggle = setInterval(play_frame, )
    additional_current_anim = name
    additional_set_functionToCall[0] = functionToCall
}

function play_frame() {


}