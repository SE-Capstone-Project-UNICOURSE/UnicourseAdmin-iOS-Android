package com.unicourseadmin.nativemodulepackage

import com.facebook.react.TurboReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class NativeModulesPackage : TurboReactPackage() {
    override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? {
        return when (name) {
            "NativeLocalStorage" -> NativeLocalStorageModule(reactContext)
            else -> null
        }
    }

    override fun getReactModuleInfoProvider(): ReactModuleInfoProvider {
        return ReactModuleInfoProvider {
            val map = mutableMapOf<String, ReactModuleInfo>()
            map["NativeLocalStorage"] = ReactModuleInfo(
                "NativeLocalStorage",
                "NativeLocalStorage",
                false, false, true, false, true
            )
            map
        }
    }
}
