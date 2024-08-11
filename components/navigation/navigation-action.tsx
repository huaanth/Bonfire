"use client";

import { Plus } from "lucide-react";

import { ActionTooltip } from "@/components/action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

export const NavigationAction = () =>{

    const { onOpen } = useModal();
    return(
        <div>
            <ActionTooltip
            side= "right"
            align= "center"
            label = "Add campsite">
                <button onClick= {() => onOpen("createServer")} className="group">
                    <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px]
                    group-hover:rounded-[16px] transition-all overflow-hidden items-center
                    justify-center bg-background dark:bg-amber-500 group-hover:bg-yellow-300">
                        <Plus 
                        className="group-hover:text-white transition text-yellow-300"
                        size= {25}/>

                    </div>
                </button>
            </ActionTooltip>
        </div>
    )
}