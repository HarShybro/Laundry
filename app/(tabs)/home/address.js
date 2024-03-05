import { View, Text, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function address() {
  const [step, setStep] = useState(1);
  const handleBack = () => {
    setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };
  const handleNext = () => {
    setStep((prevStep) => {
      const nextStep = prevStep + 1;
      console.log(nextStep);

      if (nextStep == 5) {
      }

      return nextStep;
    });
  };
  console.log(step);
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "#FEBE10",
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
        }}
      >
        <View
          style={{
            width: hp(6),
            height: hp(6),
            borderRadius: 20,
            backgroundColor: "#A0A0A0",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="chevron-back" size={24} color="white" />
        </View>
        <Text style={{ flex: 1, fontSize: hp(2.5) }}>Choose your Address</Text>

        <View
          style={{
            width: hp(6),
            height: hp(6),
            borderRadius: 20,
            backgroundColor: "#A0A0A0",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Entypo name="cross" size={24} color="white" />
        </View>
      </View>

      <View
        style={{
          padding: 10,
          backgroundColor: "white",
          height: 100,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <Pressable
          style={{
            width: hp(5),
            height: hp(5),
            borderRadius: 18,
            backgroundColor: "#A0A0A0",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="chevron-back" size={24} color="white" />
        </Pressable>

        <Pressable
          style={{
            width: hp(7),
            height: hp(7),
            borderRadius: 18,
            backgroundColor: "#F5F5F5",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="location" size={24} color="lightblue" />
        </Pressable>

        <Pressable
          style={{
            width: hp(7),
            height: hp(7),
            borderRadius: 18,
            backgroundColor: "#F5F5F5",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Entypo name="back-in-time" size={24} color="lightblue" />
        </Pressable>

        <Pressable
          style={{
            width: hp(5),
            height: hp(5),
            borderRadius: 18,
            backgroundColor: "#A0A0A0",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Entypo name="chevron-right" size={24} color="white" />
        </Pressable>
      </View>

      <View style={{ backgroundColor: "#F0F8FF", flex: 1, padding: 10 }}>
        <ScrollView>
          {step == 1 && (
            <View>
              {/* {Map Over all the addresses} */}
              <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
                <AntDesign name="plus" size={24} color="black" />
                <Pressable>
                  <Text style={{ fontSize: hp(2.5) }}>Add address</Text>
                </Pressable>
              </Pressable>

              <View>
                {/* map overthe address */}
                <Pressable>
                  <View>
                    <View>
                      <Ionicons
                        name="location-outline"
                        size={24}
                        color="#0066b2"
                      />
                      <Text style={{ fontSize: 17, fontWeight: "500" }}>
                        Home
                      </Text>
                    </View>
                  </View>
                </Pressable>
              </View>
            </View>
          )}
        </ScrollView>
      </View>

      <View
        style={{
          backgroundColor: "white",
          padding: 15,
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          marginTop: "auto",
        }}
      >
        <Pressable
          disabled={step == 1}
          onPress={() => handleBack()}
          style={{
            backgroundColor: "#d0d0d0",
            padding: 15,
            borderRadius: 10,
            flex: 1,
          }}
        >
          <Text style={{ textAlign: "center" }}>Back</Text>
        </Pressable>
        <Pressable
          onPress={() => handleNext()}
          style={{
            backgroundColor: "#0066b2",
            padding: 15,
            borderRadius: 10,
            flex: 1,
          }}
        >
          <Text
            style={{ textAlign: "center", color: "white", fontWeight: "500" }}
          >
            {step == 4 ? "Place Order" : "Next"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
